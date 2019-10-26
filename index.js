const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
var d=[];

const app = express();

//console.log(__dirname+public+"public");
 app.use(express.static("public"));
app.set('view engine', 'ejs');
app.listen(3000, function() {
  console.log(__dirname);
  d=[]
  console.log("server is running on port 3000");
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function(req, res) {


  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month : "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {kindOfDay:day,listItem:d});


});

app.post("/",function(req,res){
console.log(req.body.button1);
  if((req.body.ob=="") && (req.body.button1=="b1"))
  {
    d.push("Null");
  }
  else if(req.body.button1=="b1")
  {
    d.push(req.body.ob);
  }
  else if((req.body.button2=="b2"))
  {
    d.pop();
  }

  res.redirect("/");
});
