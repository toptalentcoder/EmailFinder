const Company = require('../models/domain.model');
const { findEmailsByDomain, findContactInfoByNameAndDomain } = require('../services/scraper.service');

exports.searchByKeyword = async (req, res, next) => {
  try {
    const keyword = req.query.keyword;
    const companies = await searchCompanies(keyword);
    res.json(companies);
  } catch (err) {
    next(err);
  }
};

exports.getCompanyDetails = async (req, res, next) => {
  try {
    const { url } = req.body;
    console.log(url);
    const data = await findEmailsByDomain(url);
    // const company = await Company.create({ url, ...data });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getPersonDetails = async (req, res, next) => {
  try {
    const { firstName, lastName, domain } = req.body; ``
    if (!firstName || !lastName || !domain) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const contacts = await findContactInfoByNameAndDomain(firstName, lastName, domain);
    if (!contacts.length) return res.status(404).json({ message: 'No contact found' });
    res.json({ contacts });
  } catch (err) {
    next(err);
  }
};
