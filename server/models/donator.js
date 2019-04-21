const mongooose = require('mongoose');

const Schema = mongooose.Schema;

const donatorSchema=  new Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    contact: String,
    uname: {
        type: String,
        unique: true
    },
    password: String
})

module.exports = mongooose.model('donatormodel',donatorSchema,'donator_details');