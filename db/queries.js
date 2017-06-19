const knex = require('./knex'); // THIS is the Connection!!

module.exports = {
    getAll() {
        return knex('strains');
    },
    getOne(id) {
    				return knex('strains').where('id', id).first();
				}
}
