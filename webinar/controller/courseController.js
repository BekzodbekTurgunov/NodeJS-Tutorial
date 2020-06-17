const {Course, Teacher} = require('../model/courseModel')
exports.getCourse = async (req, res) => {
    let course = await Course
        .find()

    res.send(course)
}
exports.postCourse = async (req, res) => {
    let course = new Course({
        title: req.body.title,
        tags: req.body.tags,
        teacher: new Teacher({
            fullName: req.body.teacher.fullName,
            experience: req.body.teacher.experience
        }),
        price: req.body.price
    })
    course = await course.save()
    res.status(201).send(course)
}