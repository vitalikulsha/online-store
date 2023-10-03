const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        const { name } = req.body;
        const brand = await Brand.create({ name });
        return res.json(brand);
    }

    async getAll(req, res) {
        const brends = await Brand.findAll();
        return res.json(brends);
    }
}

module.exports = new BrandController()