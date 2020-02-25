var express=require('express');
var router=express.Router();
var cors= require('cors');
router.use(cors())

var bodyParser=require('body-parser');
var connection=require('./connection');



router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


router.get('/',function(req,res){
  

    var q="select * from demo"
    connection.query(q,  function(err,resp){
        if(err){ 
            res.status(400).send(err)
            throw err;
        }

        res.status(200).json(resp)


    })


})

router.delete('/:id',function(req,res){
  let id=req.params.id;


    var q="delete from demo where id="+id;
    connection.query(q,  function(err,resp){
        if(err){ 
            res.status(400).send(err)
            throw err;
        }

        res.status(200).json(resp)


    })


})

router.post('/',function(req,res){
  
    var password=req.body.password;
    var name=req.body.name;
    var email=req.body.email;
    var pa=[name,password,email]

    var q="INSERT INTO `Test`.`demo` (`name`, `password`, `email`) VALUES (?, ?, ?)"
    connection.query(q,pa,function(err,resp){
        if(err){ 
            res.status(400).send(err)
            throw err;
        }

        res.status(200).json(resp)


    })


})

router.put('/',function(req,res){
    var id=req.body.id;
    var name=req.body.name;
    var email=req.body.email;

  
    var q="UPDATE `Test`.`demo` SET `name`='"+name+"',`email`='"+email+"' WHERE `id`='"+id+"'"
    console.log(q)
    connection.query(q,  function(err,resp){
        if(err){ 
            res.status(400).send(err)
            throw err;
        }

        res.status(200).json(resp)


    })


})





module.exports=router;