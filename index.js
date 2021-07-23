const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const posts = require('./routers/posts')

const app = express()

// http://localhost:5000/
const PORT = process.env.port || 5000

const URI = 'mongodb+srv://admin:123@cluster0.3ejzb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// use express middleware
// middleware ko co router nao o phia tren nen moi request deu dc chay het qua tat ca cac middleware
app.use(bodyParser.json({ limit: '30mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());

// router get

app.use('/posts', posts)

// promise
mongoose
    .connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log('Connected to DB')
        // run server
        app.listen(PORT, () => {
            console.log(`Server starting on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log('error: ', err)
    })
