const mongooose = require('mongoose');

const Schema = mongooose.Schema;

const clothesSchema=  new Schema({
    donorFirstName: String,
    donorLastName: String,
    donorEmail: String,
    donorAddress: String,
    donorContact: String,
    donorUname: String,
    clothesType: String,
    clothesSize: String,
    clothesWearer: String,
    quantity: String
})

module.exports = mongooose.model('clothesmodel',clothesSchema,'clothes_details');