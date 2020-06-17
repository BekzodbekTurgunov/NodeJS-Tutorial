const Student = require('../model/studentModel')

exports.getOneStudent = async (req, res) => {
    let student = await Student
        .findById({_id:req.params.id})
    res.send(student)

}

exports.getStudent = async (req, res) => {
    let student = await Student
        .find()
    res.send(student)

}
exports.postStudent = async (req, res) => {
    let student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        isVip: req.body.isVip
    })
    student = await student.save()
    res.status(201).send(student)
}

exports.putStudent = async (req, res) => {
    let student = await Student.findByIdAndUpdate({_id: req.params.id},
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            isVip: req.body.isVip
        }, {new: true})
    res.send(student)

}
exports.delStudent = async (req, res) => {
    let del = await Student
        .findByIdAndRemove(req.params.id)
    res.send(del)
}
