const mongoose = require('mongoose')


// const teacherSchema = new mongoose.Schema({
//     fullName:String,
//     experience:Number,
// })
const enrollmentSchema = new mongoose.Schema({
    title:String,
    teacher:new mongoose.Schema({
        fullName:String,
        experience:Number,
    }),
    subscribers:String,
    weekend:{
        type:Array,
        // enum:["mon","tue","wed","thu","fri","sat","sun"],
        lowercase:true,
        default:["mon","wed","fri"]
    }
})

const Enrollment = mongoose.model('enrollment',enrollmentSchema)
// const Teacher  =mongoose.model('teacher',teacherSchema)

module.exports.Enrollment = Enrollment
