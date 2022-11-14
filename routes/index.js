var express = require('express');
var router = express.Router();
var cartitem = require('../public/jsondata/cartitems.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json(cartitem);
});

router.post('/', function(req, res, next) {
  res.status(200).json({
    msg:'add to cart successfull',
    data:[]
  });
});

module.exports = router;
