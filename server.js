const express =require('express');
const bodyParser= require ('body-parser')
const app=express();
const path = require('path');
const ejs = require("ejs");

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){

const fs = require("fs");
fs.readFile("./db.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {

    const db = JSON.parse(jsonString);
    
    res.render("home", {name:db.title, post:db.post} );
    
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

})  




app.get('/post',function(req,res){


  res.render("post");
  console.log("User Click On Post Route");

});





app.get('/about',function(req,res){


  res.render("about");
  console.log("User Click On about Route");

});


app.get('/contact',function(req,res){


  res.render("contact");
  console.log("User Click On contact Route");

});


app.get('/help',function(req,res){


  res.render("help");
  console.log("User Click On help Route");

});





















app.post('/post',function(req,res){


    res.send("Submited Sucessfully")

    const post = {
      title: req.body.postTitle,
      content: req.body.postBody
    };

console.log(post.title);


})









app.listen(3000,function(){
    console.log("Sever Started On Port 3000")
})