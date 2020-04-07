const connection = require('../database/connection');

module.exports = {
    async index (req, res) {
        const rows = 10;

        const { page = 1 } = req.query;

        const [count] = await connection('contacts').count();

        const contacts = await connection('contacts').select('*').orderBy('quando','asc').limit(rows).offset((page -1) * rows);

        res.header('X-Total-Count', count['count(*)']);
    
        return res.json(contacts);
    },
    
    async create(req, res) {
        const { quando, onde, como } = req.body;
        const user_id = req.headers.authorization;

        const [id] = await connection('contacts').insert({
            quando,
            onde,
            como,
            user_id,
        });

        return res.json({ id });
    },

    async delete (req, res) {
        const { id } = req.params;
        const user_id = req.headers.authorization;

        const contact = await connection('contacts').select('user_id').where('id', id).first();

        if (contact.user_id != user_id) {
            return res.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('contacts').where('id', id).delete();

        return res.status(204).send();
    }
};


