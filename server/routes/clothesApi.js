const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Clothes = require('../models/clothes');







router.get('/', function(req, res){
    res.send('clothes api works');
});



// function 
router.post('/saveClothes',function(req,res){

    console.log("Inside server save Clothes function")
    console.log(JSON.stringify(req.body))

    var newClothes = new Clothes();
    newClothes.donorFirstName = req.body.donorFirstName
    newClothes.donorLastName = req.body.donorLastName
    newClothes.donorEmail = req.body.donorEmail
    newClothes.donorAddress = req.body.donorAddress
    newClothes.donorContact = req.body.donorContact   
    newClothes.donorUname = req.body.donorUname
    newClothes.clothesType = req.body.clothesType
    newClothes.clothesSize = req.body.clothesSize
    newClothes.clothesWearer = req.body.clothesWearer
    newClothes.quantitye = req.body.quantity
    

    newClothes.save(function(err, insertedClothes){
        if(err){
            console.log(err);
        }else{
            console.log("Clothes data saved successfully")
            res.json(insertedClothes);
        }
    });



    
})

router.get('/getClothes',function(req,res){
    Clothes.find({},function(err,ClothesDetails){
        if(err){
            console.log('error finding clothes');
        }
        else{
            console.log('Clothes Details fetched');
            res.json(ClothesDetails);
        }
    })
})









module.exports = router;