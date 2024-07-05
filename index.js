const server = require('express')()
const port = 5000

server.get('/', (req, res) => {
    res.status(200).send("Hi there, welcome home! Testing out Jenkins")
})

server.listen(port, (err) => {
    if (err) return
    console.log(`server started successfully`)
})