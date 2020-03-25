
exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) {
        // Chave primaria (id)
        table.string('id').primary();
        // Atributos da tabela
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('ongs');
};
