const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Tech', 'Design', 'Mobile'],
        required: true
    },
    title: {
        type: String,
        required: true
    },      
    image: {
        url: String,
        filename: String,
    },
    content: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;