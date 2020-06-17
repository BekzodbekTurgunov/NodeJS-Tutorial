const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    fullName: String,
    experience: Number,
})

const courseSchema = new mongoose.Schema({
    title: String,
    tags: Array,
    teacher: teacherSchema,
    price: {
        type: Number,
        required: true,
        default:200,
        min: 199
    }
})
const Teacher = mongoose.model('course', teacherSchema)
const Course = mongoose.model('teacher', courseSchema)


module.exports.Teacher = Teacher
module.exports.Course = Course
