var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var blogsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    promo: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        default: '/images/noimage.png'
    },
    type: {
        type: Schema.ObjectId,
        ref: 'Category',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
blogsSchema.index({ name: 1 }, { unique: true })
module.exports = mongoose.model('Blogs', blogsSchema)