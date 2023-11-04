const bodyParser = require("body-parser");
const express = require("express");
const Passanger=require('../models/Passanger');
const jwt = require('jsonwebtoken');
const verify=require('./PassangerJwtVerify');
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
    res.send("passasnger")
})


//get all passangers

//get specific passanger details
router.get("/getpassanger",async(req,res)=>{
    console.log(req.body.id);

    var PassangerDetails=await Passanger.findById(req.body.id);
    console.log(PassangerDetails)
    res.send(PassangerDetails)
    


})

//update passanger details



//New registreation ;
router.post("/register", async (req, res) => {

		const newPassanger = new Passanger({
                Name: req.body.name,
                Mobile:req.body.mobile,
                Age: req.body.age,
                Gender:req.body.gender,
                Email_Id:req.body.email,
                nomini_name:req.body.nomini,
                nomini_Mobile:req.body.nominiMobile,
                Password:req.body.password
            })
            
            try{
                const savedPost= await newPassanger.save();
   

                res.send({ message: "Success", success: true });
                res.status(200)
          }catch(err){
           res.send(err);
           res.status(301);
          }
     
});


//Login

router.post("/login",async(req,res)=>{

    const idExist = await Passanger.findOne({
        Email_Id: req.body.id,
        Password: req.body.pass,
    });
    try{
    
    if (!idExist){
        return res.status(301).send({ message: "not-loggedin", success: false });
    }else{
        
    const token = await jwt.sign({ id: Passanger._id }, process.env.TOKEN_SECRET,{

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