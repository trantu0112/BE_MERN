const {PostModel} = require("../models/PostModel");

exports.getPosts = async (req, res) => {
    try{
        //add post
        const post = new PostModel({
            title: 'test',
            content: 'test'
        });
        await post.save()

        // return all posts in db
        const posts = await PostModel.find();
        console.log('posts', posts)
        res.status(200).json(posts)
    }catch (err) {
        res.status(500).json({error: err})
    }
}

exports.createPost = async (req, res) => {
    res.send('CREATE SUCCESS OK!')
}