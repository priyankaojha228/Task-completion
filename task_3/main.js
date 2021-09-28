const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Training'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const dataRouter = require('./routes/data')
app.use('/data',dataRouter)

app.listen(9000, () => {
    console.log('Server started')
})