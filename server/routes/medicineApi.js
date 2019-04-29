const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Medicine = require('../models/medicine');







router.get('/', function(req, res){
    res.send('medicine api works');
});



// function 
router.post('/saveMedicine',function(req,res){

    console.log("Inside server save Medicine function")
    console.log(JSON.stringify(req.body))

    var newMedicine = new Medicine();
    newMedicine.donorFirstName = req.body.donorFirstName
    newMedicine.donorLastName = req.body.donorLastName
    newMedicine.donorEmail = req.body.donorEmail
    newMedicine.donorAddress = req.body.donorAddress
    newMedicine.donorContact = req.body.donorContact   
    newMedicine.donorUname = req.body.donorUname
    newMedicine.medicineName = req.body.medicineName
    newMedicine.medicineManufacturedBy = req.body.medicineManufacturedBy
    newMedicine.medicineManufacturingDate = req.body.medicineManufacturingDate
    newMedicine.medicineExpiryDate = req.body.medicineExpiryDate
    newMedicine.medicinePrimaryFunction = req.body.medicinePrimaryFunction
    newMedicine.medicineQuantity = req.body.medicineQuantity;

    newMedicine.save(function(err, insertedMedicine){
        if(err){
            console.log(err);
        }else{
            console.log("Medicine data saved successfully")
            res.json(insertedMedicine);
        }
    });

    
})


router.get('/getMedicines',function(req,res){
    Medicine.find({},function(err,MedicinesDetails){
        if(err){
            console.log('error finding medicines');
        }
        else{
            console.log('Medicines Details fetched');
            res.json(MedicinesDetails);
        }
    })
})









module.exports = router;