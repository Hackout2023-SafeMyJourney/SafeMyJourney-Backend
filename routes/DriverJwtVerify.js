const jwt =require('jsonwebtoken');
const { ensureIndexes } = require('../models/Driver');
require('dotenv/config');
const User = require("../models/Driver");

const { CommentsController } = require("moongose/controller");

// const app=express();

module.exports = async (req,res,next)=>{

try{

    const {authtoken}= req.headers;
    if(!authtoken){
        return next("Please enter the login access data");
    }const verify= await jwt.verify(authtoken,process.env.TOKEN_SECRET);
    req.user =await User.findById(verify.id);
    next();


}catch(err){
    return next(err);

}


}