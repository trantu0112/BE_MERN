const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    attachment: String,
    likeCount: {
        type: Number,
        default: 0
    }
    // option with timestamps: true => auto add 2 field
    // createdAt updatedAt
}, { timestamps: true})

exports.PostModel = mongoose.model('Post', schema)