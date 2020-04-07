const connection = require('../database/connection');

module.exports = {
    async create (req, res) {
        const { email, password } = req.body;

        const user = await connection('users').select('*').where('email', email).where('password', password).first();
    
        if (!user)
            return res.status(400).json({ error: 'No USER found with this credentials' });
            
        return res.json(user);
    }
};