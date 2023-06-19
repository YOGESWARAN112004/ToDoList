const express = require('express');
const bodyparser = require("body-parser");
const app = express();
const items =["workout","meditate","read"]
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",function(req,res)
{   var today = new Date()
    var options = { 
         weekday: 'long',
         day:'numeric',
         month:'long'     };
    var day = today.toLocaleDateString('en-us', options);
    res.render("list",{"days":day ,"listitems":items})
    console.log(items);
});

app.post("/",function(req,res){
    const list = req.body.list;
    items.push(list);
    res.redirect("/");
});

app.listen(3000,function(req,res){console.log("server started at port 3000");});