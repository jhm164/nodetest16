var express=require('express')
var crud=require('./module/crud')
var app=express();
var cors= require('cors');

app.use('/crud',crud)
app.use(cors())

app.get('/',function(req,res){
res.send("h")
})
var PORT=process.env.PORT||4000;
app.listen(PORT,function(){
    console.log("server address http://localhost:"+PORT)
})

