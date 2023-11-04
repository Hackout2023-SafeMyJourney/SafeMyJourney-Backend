const bodyParser = require("body-parser");
const express = require("express");
const Driver=require('../models/Driver');
const jwt = require('jsonwebtoken');
const verify=require('./DriverJwtVerify');
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


//New registreation ;
router.post("/register", async (req, res) => {

    const newDriver = new Driver({
            Name: req.body.name,
            Mobile:req.body.mobile,
            Age: req.body.age,
            Gender:req.body.gender,
            Email_Id:req.body.email,
            Cab_No:req.body.cab_no,
            Aadhar_No:req.body.aadhar_no,
            Password:req.body.password
        })
        
        try{
            const savedPost= await newDriver.save();


           res.send("Success")
           res.status(200)
      }catch(err){
       res.send(err);
      }
 
});


//Login

router.post("/login",async(req,res)=>{

const idExist = await Driver.findOne({
    Email_Id: req.body.id,
    Password: req.body.pass,
});
try{

if (!idExist){
    
    return res.status(400).send("not-loggedin");
}else{
    
const token = await jwt.sign({ id: Driver._id }, process.env.TOKEN_SECRET,{

    expiresIn:process.env.JWT_EXPIRE,

});

res.send({token});
res.status(200);	
}

}catch (err){
        console.log(err);
}

})








 module.exports = router;