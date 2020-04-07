const connection = require('../database/connection');

module.exports = {
    async index (req, res) {
        const user_id = req.headers.authorization;

        const contacts = await connection('contacts').select('*').where('user_id', user_id).orderBy('quando','asc');
    
        return res.json(contacts);
    }
};