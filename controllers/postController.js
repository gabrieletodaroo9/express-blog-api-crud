const posts = require('../data/posts')

const index = (req, res) => {
    let filteredPosts = posts
    if (req.query.tags) {
        filteredPosts = posts.filter(post => post.tags.includes(req.query.tags))
    }
    res.json(filteredPosts)
}

const show = (req, res) => {
    const post = posts.find(post => post.id == req.params.id)
    if (post) {
        res.json(post)
    } else {
        res.status(404).json({
            error: true,
            message: "Post non trovato"
        })
    }
}

const store = (req, res) => {
    const newPost = {
        id: Date.now,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    posts.push(newPost)
    res.status(201).json(posts)
}

const upgrade = (req, res) => {
    const post = posts.find(post => post.id == req.params.id)
    if (post) {
        post.title = req.body.title,
            post.content = req.body.content,
            post.image = req.body.image,
            post.tags = req.body.tags
        res.json(post)
    } else {
        res.status(404).json({
            error: true,
            message: "Post non trovato"
        })
    }
}

const modify = (req, res) => {
    res.send(`Modify the element with id:${req.params.id}`)
}

const destroy = (req, res) => {
    const id = Number(req.params.id)
    const foundPost = posts.find(post => post.id === id)
    if (!foundPost) {
        return res.status(404).json({
            error: true,
            message: 'Post non trovato'
        })
    }
    posts.splice(posts.indexOf(foundPost), 1)
    res.status(200).json(posts)
};

module.exports = { index, show, store, upgrade, modify, destroy }