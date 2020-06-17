const express = require('express')
const mongoose =require('mongoose')
const courseRouter = require('./routers/courseRouter')
const studentRouter = require('./routers/studentRouter')
const enrollRouter = require('./routers/enrollmentRouter')
const app = express()
mongoose.connect('mongodb://localhost/education',{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>{
        console.log('connected to mongodb')
    })
    .catch((err)=>{
        console.log(err)
    })


app.use(express.json())
app.use('/api/courses',courseRouter)
app.use('/api/students',studentRouter)
app.use('/api/enroll',enrollRouter)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`${port}- server is started`)
})