const express = require("express")
const  Formidable = require('express-formidable');
const { isAdmin,requireSigin } = require('../middlwear/authmiddleware');

const { createprpoductcoontroller, getallproductcontroller, getsingleproduct, productphoto, deleteproductcontroller, updateproduct, productfilter, productistcontroler, pagecount, braintreecontroller, braintreecontrollerpayment, serachitem, relatedproductcontroller,  } = require('../controllers/productcontroller');

const router = express.Router()
 
router.post('/createproduct',
requireSigin,
isAdmin,
Formidable(),
createprpoductcoontroller)
//get all product
router.get('/get-product',getallproductcontroller)
//get single product

router.get('/getsingle-product/:slug',getsingleproduct)
//get photo product
router.get('/product-photo/:pid',productphoto)

//delete product 
//pid means product id 
router.delete('/deleteproduct/:pid',deleteproductcontroller)
//update product
router.put('/upadateproduct/:pid',requireSigin,
isAdmin,updateproduct)

router.post('/productfliter',productfilter)
router.get("/pagecount",pagecount)
router.get('/product-list/:page',productistcontroler)


//payment
router.get('/braintree/token',braintreecontroller)
router.post('/braintree/payment',requireSigin,braintreecontrollerpayment)
router.get("/serach/:keyword",serachitem)

router.get('/related-product/:pid/:cid',relatedproductcontroller)
module.exports =router;