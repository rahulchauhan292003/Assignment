const express = require('express')
const router = express.Router()
const {createUser,deleteUser,editUser,getUserById,getallUser} = require('../controller/user')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create',createUser)
router.delete('/delete/:id',deleteUser)
router.put('/edit/:id',editUser)
router.get('/getalluser',getallUser)
router.get('/getbyid/:id',getUserById)

module.exports = router