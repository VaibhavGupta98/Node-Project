const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const stationarySchema=  new Schema({
    donorFirstName: String,
    donorLastName: String,
    donorEmail: String,
    donorAddress: String,
    donorContact: String,
    donorUname: String,
    stationaryType: String,
    units: String,
    
})

module.exports = mongooose.model('stationarymodel',stationarySchema,'stationary_details');