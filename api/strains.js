const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
				res.json({message: 'This is the index page.'})
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