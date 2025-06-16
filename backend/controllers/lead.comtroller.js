const { searchProspects } = require('../services/scraper.service');

exports.searchLead = async (req, res, next) => {
    try {
        const { activity, country, level1, level2, city } = req.body;
        if (!activity || !country || !level1 || !city) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const leads = await searchProspects({ activity, country, level1, level2, city });
        res.json({ leads });
    } catch (err) {
        next(err);
    }
};