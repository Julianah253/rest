const express = require('express')
const app = express()
const port = 9090
const userRoute = require('./routes/userRoute')
const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log({error: error.message}))
db.once('open', () => console.log('db connected successfully'))

app.use(express.json())
app.use('/api', userRoute)

app.listen(port, () => {
    console.log('server running at port: 9090')
})