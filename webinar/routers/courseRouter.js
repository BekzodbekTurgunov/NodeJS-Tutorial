const express = require('express')
const router = express.Router()
const controller = require('../controller/courseController')

router.get('/',controller.getCourse)
router.post('/',controller.postCourse)



module.exports = router



