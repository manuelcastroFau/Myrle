//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('Assets'));

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

app.listen(3000, function() {
  console.log("Server started in port 3000");
});
