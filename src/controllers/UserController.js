const connection = require('../database/connection');

module.exports = {
    async index (req, res) {
        const users = await connection('users').select('*');
    
        return res.json(users);
    },
    
    async create(req, res) {
        const { name, email, age, gender, password } = req.body;

        const [id] = await connection('users').insert({
            name,
            email,
            age,
            gender,
            password,
        })

        return res.json({ id });
    }
};