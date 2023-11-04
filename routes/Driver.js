const bodyParser = require("body-parser");
const express = require("express");
const Post=require('../models/Driver');
const jwt = require('jsonwebtoken');
const verify=require('./JwtVerify');
const multer =require('multer');
const formidable = require("formidable");
const  fs=require('fs');
const util=require('util')
const unlinkFile=util.promisify(fs.unlink)
 
const path = require('path');
var cookies = require("cookie-parser");

var ObjectId = require('mongodb').ObjectID;


const {uploadFile}=require("./s3")



const app=express();

app.use(express.static("public"))

    
app.use(bodyParser.json());

app.use(cookies());
app.set('view engine', 'ejs');

const router = express.Router();
const upload=multer({dest:'uploads/'});


router.get('/',(req,res)=>{
    res.send("Driver")
})




 module.exports = router;