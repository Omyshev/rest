const express = require('express')
const config = require('config')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.json({ extended: true }))


app.use('/api/redline', require('./routes/mailler.routes'))




const PORT = config.get('port') //5000

app.listen(PORT, ()=>{
    console.log('Приложение запущено - Порт:'+PORT)
})
