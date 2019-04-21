const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Donator = require('../models/donator');
//const Medicine = require('../models/medicine');




router.get('/', function(req, res){
    res.send('donator api works');
});



// function to receive donator login username& password and checking in db and returning donator's username 
router.post('/authenticateDonator',function(req,res){

    console.log("Inside server function")
    console.log(JSON.stringify(req.body))

    Donator.findOne({uname: req.body.username },function(err,donatorDetails){
        if(err){
            console.log("error finding user")
        }
        else{
            console.log(donatorDetails);
            res.send(donatorDetails);
        }
    })
    
})









module.exports = router;