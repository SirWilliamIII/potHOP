exports.up = function(knex, Promise) {
    return knex.schema.createTable('strains', table => {
        table.increments();
        table.text('name');
        table.text('ratio');
        table.text('genetics');
        table.text('climate');
        table.text('url');

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('strains');
};
