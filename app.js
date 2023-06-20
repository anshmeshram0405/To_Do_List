//jshint esverion:6

const express = require ("express");
const bodyParser = require("body-parser");
const date =require(__dirname+"/date.js");

// console.log(date());

const app = express();
const items=[];
const workItems=[];
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req,res){

const day =date.getDate();

    res.render('List',{ListTitle: day, newListitems: items});

});


app.post("/",function(req,res){
    // console.log(req.body);
    const item =req.body.newitem;
    if(req.body.List ==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function(req,res){
    res.render("List",{ListTitle: "Work List", newListitems: workItems});
});



app.post("/work",function(req,res){
    const item =req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(port, function(){
    console.log(`Server started on $(port)`);
})