const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
				queries.getAll().then(strains => {
								res.json(strains);
				})
});
//
// router.get('/strains', (req, res) => {
// 				res.json({
// 								text: strains
// 				})
// });
//
// router.get('/strains/:id', function(req, res){
// 				res.json({
// 								text: strains[req.params.id]});
// });
//

module.exports = router;
