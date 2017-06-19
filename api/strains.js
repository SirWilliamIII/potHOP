const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

function isValidId(req, res, next) {
				if(!isNaN(req.params.id)) {
								return next();
				}
								next(new Error('Invalid Id'));
}

router.get('/', (req, res) => {
				queries.getAll().then(strains => {
								res.json(strains);
				})
});

router.get('/:id', isValidId, (req,  res, next) => {
				queries.getOne(req.params.id).then(strain => {
								if (strain) {
												res.json(strain)
								} else {
										next()
								}

				})
});

module.exports = router;
