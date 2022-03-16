//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('Assets'));
app.use(express.static('Assets/js'));

app.get('/', (req,res) => {
  res.sendFile(__dirname+'/index.html');
});

app.get("/register", (req, res) =>{
  res.sendFile(__dirname+'/register.html');
  //res.send("sss");


});

app.get("/menu",(req,res) =>{

  res.sendFile(__dirname+"/menu-section.html");
});

app.get("/events",(req,res) =>{
  
  res.sendFile(__dirname+"/events.html");
});

app.get("/profile",(req,res) =>{
  
  res.sendFile(__dirname+"/profile.html");
});

app.get("/social-life",(req,res) =>{
  
  res.sendFile(__dirname+"/social-life.html");
});

app.get("/information",(req,res) =>{
  
  res.sendFile(__dirname+"/information.html");
});

app.get("/billing",(req,res) =>{
  
  res.sendFile(__dirname+"/billing.html");
});
app.get("/community",(req,res) =>{
  
  res.sendFile(__dirname+"/community.html");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port =3000;
}   

app.listen(port, function() {
  console.log("Server started in port 3000");
});
