const mongooose = require('mongoose');

const Schema = mongooose.Schema;

const medicineSchema=  new Schema({
    donorFirstName: String,
    donorLastName: String,
    donorEmail: String,
    donorAddress: String,
    donorContact: String,
    donorUname: String,
    medicineName: String,
    medicineManufacturedBy: String,
    medicineManufacturingDate: String,
    medicineExpiryDate: String,
    medicinePrimaryFunction: String,
    medicineQuantity: String,
})

module.exports = mongooose.model('medicinemodel',medicineSchema,'medicine_details');