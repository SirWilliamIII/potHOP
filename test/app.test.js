const request = require('supertest');
const expect = require('../db/knex');
const knex = require('../db/knex');

const app = require('../app');

describe('Denver Pot', () => {
				before((done) => {
								//run migrations
								knex.migrate.latest()
								.then(() => {
												return knex.seed.run();
								}).then(() => done());
				});
				it('Lists all Records', (done) => {
								request(app)
									.get('/api/v1/strains')
									.set('Accept', 'application/json')
									.expect('Content-Type', /json/)
									.expect(200)
									.then((response) => {
												expect(response.body)
									})
				});
});