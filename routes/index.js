var express = require('express');
var router = express.Router();
const Video = require('../model/video');

/* GET users listing. */


router.get('/', (req, res) => {
    Video.videoModel.find().then((video) => {
        res.render('page/home', { video: video });
    });

});


module.exports = router;