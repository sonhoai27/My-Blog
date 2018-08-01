var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    }
})
categorySchema.index({ name: 1 }, { unique: true })
module.exports = mongoose.model('Category', categorySchema)