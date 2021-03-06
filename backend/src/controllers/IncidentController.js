const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;

        console.log(ong_id);

        const [id] = await connection('incidents').insert(
            {
                ong_id,
                title,
                description,
                value
            }
        );

        return res.json({ id });
    },

    async index(req, res) {
        const { pages = 1 } = req.query;

        const [count] = await connection('incidents')
            .count();

        console.log(count);

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((pages - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        res.header('X-Total-Count', count['count(*)']);

        return res.json(incidents);
    },

    async remove(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;
        const incident = await connection('incidents').
            where('id', id).
            select('ong_id').
            first();

        if (!incident)
            return res.status(404).json({ error: 'ong_id invalido' });
        else if (incident.ong_id != ong_id)
            return res.status(401).json({ error: 'Erro de autenticação' });

        await connection('incidents').where('id', id).delete();

        return res.status(204).send();
    },

}