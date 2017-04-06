var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("home");
});

app.get("/posts", function(req, res){
   var posts = [
           {title: "post 1", author: "bartomuth sinotahllywacker"},
           {title: "post 2", author: "jake"},
           {title: "post 3", author: "sara"},
           {title: "post 4", author: "cas"},
           {title: "post 5", author: "waffle"},
           {title: "post 6", author: "ozzy"},
           {title: "post 7", author: "gurt"},
           {title: "post 8", author: "hurlicker ponsefetta"},
       ]; 
       res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("SEVERED"); 
});