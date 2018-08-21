var express = require("express")
var cors = require("cors");

var app = express(); 
app.use(cors());

app.get("/hello", function(request,response){

    response.end("thankyou");
})

app.listen("8000");