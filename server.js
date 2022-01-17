const express = require("express")
const app = express()
const expresslayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))

const mangoose = require('mangoose')
mangoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mangoose.connection
db.on('error', error => console.log('conncection error'))
db.once('open', () => console.log('connection succeded !'))



app.use('/', indexRouter)



app.listen(process.env.PORT || 3000)

