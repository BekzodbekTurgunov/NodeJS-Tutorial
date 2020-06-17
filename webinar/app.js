const express = require('express')
const mongoose =require('mongoose')
const courseRouter = require('./routers/courseRouter')
const app = express()
mongoose.connect('mongodb://localhost/webinar',{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>{
        console.log('connected to mongodb')
    })
    .catch((err)=>{
        console.log(err)
    })


app.use(express.json())
app.use('/api/webinar',courseRouter)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`${port}- server is started`)
})