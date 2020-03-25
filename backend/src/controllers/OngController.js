const connection = require('../database/connection');

const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX');
        const { name, email, whatsapp, city, uf } = req.body;
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        console.log(id, name, email, whatsapp, city, uf);
        return res.json({ id });
    },

    async index(req, res) {
        return res.json(await connection('ongs').select());
    }
};