var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// can change this schema to name of choosing but make sure to update routes
var schemaName = new Schema({
  first: String,
  last: String
  });

module.exports = mongoose.model('Name', schemaName);