const express = require("express")

const { requireSigin, isAdmin } = require('../middlwear/authmiddleware');
const { categorycontroller, updatecategory, getallcategory, getsinglecategory, deletecategory } = require("../controllers/categorycontroller");
const router = express.Router()


//routes
router.post('/creat-category',requireSigin,isAdmin,categorycontroller)
//update
router.put('/update-category/:id',requireSigin,isAdmin,updatecategory)
//get all
router.get('/getall-category',getallcategory)
// get single
router.get('/getsingle-category/:slug',requireSigin,isAdmin, getsinglecategory)
//delete
router.delete('/delete-category/:id',requireSigin,isAdmin,deletecategory )


module.exports =router;