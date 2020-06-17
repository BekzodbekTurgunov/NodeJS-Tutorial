const express = require('express')
const router = express.Router()
const controller = require('../controller/studentController')

router.get('/', controller.getStudent)

router.get('/:id', controller.getOneStudent)

router.post('/', controller.postStudent)

router.put('/:id', controller.putStudent)

router.delete('/:id', controller.delStudent)


module.exports = router