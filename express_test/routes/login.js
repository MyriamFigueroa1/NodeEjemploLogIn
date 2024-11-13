var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next){
    const user = req.body.user;
    if(user === "admin"){
        res.render('restricted', {title: 'Express'});
    } else{
        res.render('login', {title: 'Express'});
    }
});

module.exports = router;
