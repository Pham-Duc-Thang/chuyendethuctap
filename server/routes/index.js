var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
router.get('/', function (req, res) {
     res.sendFile(path.join(__dirname, '../', 'index.html'));
});
const searchController = require('../controllers/searchController');

// Other routes...
router.get('/search', searchController.searchProducts);

module.exports = router;

module.exports = router;
