//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
//app.use(bodyParser.urleconded({extended: true}));

app.get('/', (req,res) => {
  res.sendFile(__dirname+'/index.html');
});

app.get("/register", (req, res) =>{
  res.sendFile(__dirname+'/register.html');
  //res.send("sss");
});

app.listen(3000, function() {
  console.log("Server started in port 3000");
});
