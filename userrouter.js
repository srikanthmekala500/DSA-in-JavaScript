const express = require('express')
const { registerController, logincontroller, forgotpasswordcontroller } = require('../controllers/usercontroller')
const { requireSigin, isAdmin } = require('../middlwear/authmiddleware')
const router = express.Router()



router.post('/register',registerController)
router.post('/login',logincontroller)

//forgot password |\post
router.post ('/forgot-password',forgotpasswordcontroller)


//protected route auth
router.get('/user-auth',(req,res)=>{
        res.status(200).send({ok:true})
})  
//protected admin route auth

router.get('/admin-auth',requireSigin,isAdmin,(req,res)=>{
        res.status(200).send({ok:true})
})
module.exports =router;