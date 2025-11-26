const posts = require('../posts')

const index = (req, res) => {
    res.json(posts)
}

const show = (req, res) => {
    const post = posts.find(post => post.id == req.params.id)
    if (post) {
        res.json(post)
    } else {
        res.send('Nessun post trovato con questo id')
    }
}

const store = (req, res) => {
    res.send('Store a new post into the array')
}

const upgrade = (req, res) => {
    res.send(`Update the element with id:${req.params.id}`)
}
const modify = (req, res) => {
    res.send(`Modify the element with id:${req.params.id}`)
}

const destroy = (req, res) => {
    res.send(`Destroy the element with id:${req.params.id}`)
}

module.exports = { index, show, store, upgrade, modify, destroy }