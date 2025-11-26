const express = require('express')
const app = express()
const PORT = 3000
const postsRouter = require('./routers/posts')

app.use(express.static("public"))

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("This is the entrypoint of the server")
})

app.use('/api/posts', postsRouter)