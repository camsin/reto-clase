var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index/index');

/* GET users listing. */
router.get('/', indexController.index);

module.exports = router;
