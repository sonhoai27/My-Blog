var mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://kris_nguyen:sontungmtp27@ds259711.mlab.com:59711/sonhoai27', { useNewUrlParser: true });
}
module.exports = {
    connectDB
}