const server = require('./src/app')
const mongoose = require('mongoose')
require('dotenv').config()

const port = 10000

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to Database PokeMaster"))
    .catch((error) => console.log(error))

//up server
server.listen(port, () => {
    console.log("Server listening in port", port)
})