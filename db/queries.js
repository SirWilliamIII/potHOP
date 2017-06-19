const knex = require('./knex'); // THIS is the Connection!!

module.exports = {
    getAll() {
        return knex('strain');
    }
}
