const bodyParser = require("body-parser");
const express = require("express");
const Rides=require('../models/RideList');
const Passanger=require('../models/Passanger');
const Driver=require('../models/Driver');
const jwt = require('jsonwebtoken');
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


//get all drivers

//get specific driver details
router.get("/")
//update driver details


router.get("/getRide",async(req,res)=>{
    console.log(req.body.id);

    var rideDetails=await Rides.findById(req.body.id);
    console.log(rideDetails)
    console.log(rideDetails.driver_details);
    console.log(rideDetails.passanger_details)
    res.send(rideDetails)
    


})

router.post("/addride",async(req,res)=>{

        console.log(req.body);
		const newRide = new Rides({
            source:req.body.src,
            destination:req.body.dest,
            driver_details:req.body.driverid,
            passanger_details:req.body.passangerid,
            Ride_Type:req.body.Ride_Type,
            Cab_No:req.body.Cab_no
        })
        
        try{
            const savedPost= await newRide.save();


           res.send("Success")
           res.status(200)
      }catch(err){
       res.send(err);
      }

})





 module.exports = router;