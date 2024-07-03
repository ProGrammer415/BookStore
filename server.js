//Check if we are running in the production environment or not
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//import express from the express library
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//Import the router path
const indexRouter = require('./routes_controllers/index')

const port = process.env.PORT || 3000

//set view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

//Import Mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL) 
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

//tell our app to use our router
app.use('/', indexRouter)

//listen to port : set default port number to 3000
app.listen(port) 