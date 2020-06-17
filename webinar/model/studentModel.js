const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    isVip: {
        type: Boolean,
        default: false
    },
    courseCount: {
        type: Number,
        default: 0
    }
})

const Student = mongoose.model('students', studentSchema)

module.exports = Student