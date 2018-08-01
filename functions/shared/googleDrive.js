const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
const TOKEN_PATH = 'token.json';
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const { keyFolder } = require('./key')

function Auth(cb) {
    fs.readFile('credentials.json', (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        authorize(JSON.parse(content), auth => {
            cb(auth)
        });
    });
}

function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getAccessToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return callback(err);
            oAuth2Client.setCredentials(token);
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) console.error(err);
            });
            callback(oAuth2Client);
        });
    });
}

function listFiles(auth, cb) {
    const drive = google.drive({ version: 'v3', auth });
    drive.files.list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const files = res.data.files;
        let temp = []
        if (files.length) {
            files.map((file) => {
                temp = [...temp, `${file.name} (${file.id})`]
            });

            cb(temp)
        }
    });
}

function insert(name, url) {
    return new Promise((resolve, reject) => {
        Auth(auth => {
            const drive = google.drive({ version: 'v3', auth });
            var folderId = keyFolder;
            var fileMetadata = {
                'name': name,
                parents: [folderId]
            };
            var media = {
                mimeType: 'image/jpeg',
                body: fs.createReadStream(url)
            };
            drive.files.create({
                resource: fileMetadata,
                media: media,
                fields: 'id'
            }, function(err, file) {
                if (err) {
                    reject(err)
                } else {
                    resolve(file.data.id)
                }
            });
        })
    })
}
module.exports = {
    insert
}