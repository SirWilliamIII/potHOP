const strains = require('../strains');

exports.seed = function(knex, Promise) {
				// Deletes ALL existing entries
				return knex.raw('TRUNCATE strains RESTART IDENTITY CASCADE;')
				.then(function () {
								return knex('strains').insert(strains);
				});
};