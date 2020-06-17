const express  =require('express')
const controller = require('../controller/enrollmentController')
const router = express.Router()

router.get('/', controller.getEnrollment)


router.post('/',controller.postEnrollment)


module.exports = router