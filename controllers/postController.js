const posts = require('../data/posts')

const index = (req, res) => {
    res.json(posts)
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
    const title = req.query.title
    const content = req.query.content
    const newId = posts.length + 1

    const newPost = {
        id: newId,
        title: title,
        content: content,
    }

    posts.push(newPost)
    res.status(201).json(posts)
}

const upgrade = (req, res) => {
    res.send(`Update the element with id:${req.params.id}`)
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