const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
  keyword: String,
  name: String,
  url: String,
  logo: String,
  emails: [String],
  people: [{
    name: String,
    title: String
  }]
});

module.exports = mongoose.model('Domain', domainSchema);
