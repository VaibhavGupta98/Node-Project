const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Stationary = require('../models/stationary');






router.get('/', function(req, res){
    res.send('stationary api works');
});



// function 
router.post('/saveStationary',function(req,res){

    console.log("Inside server save Stationary function")
    console.log(JSON.stringify(req.body))

    var newStationary = new Stationary();
    newStationary.donorFirstName = req.body.donorFirstName
    newStationary.donorLastName = req.body.donorLastName
    newStationary.donorEmail = req.body.donorEmail
    newStationary.donorAddress = req.body.donorAddress
    newStationary.donorContact = req.body.donorContact   
    newStationary.donorUname = req.body.donorUname
    newStationary.stationaryType = req.body.stationaryType
    newStationary.units = req.body.units
    

    newStationary.save(function(err, insertedStationary){
        if(err){
            console.log(err);
        }else{
            console.log("Stationary data saved successfully")
            res.json(insertedStationary);
        }
    });
})



router.get('/getStationary',function(req,res){
    Stationary.find({},function(err,StationaryDetails){
        if(err){
            console.log('error finding stationary');
        }
        else{
            console.log('Stationary Details fetched');
            res.json(StationaryDetails);
        }
    })
})









module.exports = router;