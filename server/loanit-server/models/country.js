var mongoose = require('mongoose');

var CountrySchema = new mongoose.Schema({
  name: String,
  cities: Array
});

module.exports = mongoose.model('Country', CountrySchema);
