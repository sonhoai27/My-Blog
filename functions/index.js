const functions = require('firebase-functions');
const express = require('express')
const bodyParser = require("body-parser");
const path = require('path')
const app = express()
const db = require('./connection/db')
db.connectDB()

const categoryModel = require('./model/Category')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({

        });
    }
    next();
});

app.get("/", (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=1000')
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            path: req.headers
        }
    });
});

exports.app = functions.https.onRequest(app)