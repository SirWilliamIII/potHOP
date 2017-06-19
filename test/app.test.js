const knex = require('../db/knex');

describe('Denver Pot', () => {
				before(() => {
								//run migrations
								knex.migrate.latest()
								.then(() => {
												return knex.seed.run();
								});
								//run seeds
				});
})