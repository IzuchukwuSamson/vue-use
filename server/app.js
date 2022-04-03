// const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const productsRouter = require('./routes/productsRoute')
const userRouter = require('./routes/userRoute')

const app = express()

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
    // console.log(req.headers)
    next()
})

app.use('/products', productsRouter)
app.use('/users', userRouter)


module.exports = app