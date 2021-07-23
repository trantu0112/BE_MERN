// import
const express = require('express')
const {getPosts} = require('../controllers/posts')
const {createPost} = require('../controllers/posts')

const router = express.Router();

router.get('/', getPosts)

router.post('/', createPost)

// export
module.exports = router