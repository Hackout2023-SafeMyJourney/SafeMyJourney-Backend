const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");
var cookies = require("cookie-parser");
const cors= require('cors');


const app = express(); 
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.use(cookies());

app.use(cors());

mongoose.connect(
	process.env.DB_Connect,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {}
);


//import routes
const DriverRoute = require("./routes/Driver");
const PassangerRoute = require("./routes/Passanger");

//middleware
app.use("/driver", DriverRoute);
app.use("/passanger", PassangerRoute);

app.set('view engine', 'ejs');
app.use(express.static("public"))


//Home get request
app.get('/',async(req,res)=>{
    res.send("Home")
})


app.listen(3000, () => {
	
});