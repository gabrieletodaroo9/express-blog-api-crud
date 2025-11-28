const express = require('express')
const app = express()
const PORT = 3000
const postsRouter = require('./routers/posts')

app.use(express.static("public"))
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

app.get('/', (req, resp) => {
    res.send("This is the entrypoint of the server")
})

app.use('/api/posts', postsRouter)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ err: err.message })
})

