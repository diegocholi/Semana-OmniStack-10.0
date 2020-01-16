const express = require('express')
const mongose = require('mongoose')
const routes = require('./routes')

const app = express()

// STRING DE CONEXÃO DO CLUSTER DO: MongoDB Atlas
mongose.connect('mongodb+srv://root:975907@cluster0-cjtsa.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

/* **************************
 *  Configurações express   *
 ************************** */ 
app.use(express.json()) // Express.json tem que vir antes das rotas
app.use(routes)

app.listen(7777)
