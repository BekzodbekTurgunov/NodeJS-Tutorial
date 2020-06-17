const {Enrollment} = require('../model/enrollmentModel')
const {Teacher,Course} = require('../model/courseModel')
const Student = require('../model/studentModel')

exports.getEnrollment = async (req, res) => {
    let enroll =await Enrollment
        .countDocuments()

    res.sendStatus(200,enroll)/*.send(enroll)*/
}
exports.postEnrollment = async (req,res)=>{
    const course = await Course
        .findById({_id:req.body.courseId})
    const student  = await Student
        .findById({_id:req.body.studentId})

    let enroll = new Enrollment({
        title:course.title,
        teacher:{
            fullName:course.teacher.fullName,
            experience:course.teacher.experience
        },
        subscribers:student.firstName
        // $push:{
        //     subscribers:student
        // }
    })
    // enroll = await enroll.save()
    res.send(enroll)
}