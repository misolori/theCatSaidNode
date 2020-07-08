var express = require('express');
var router = express.Router();

var fs = require('fs');
require('dotenv').config()

router.get('/', function (req, res, next) {

   let inImgPath = "/images/dogpaw.png";

   res.render('index',
      {
         title: "The DOG Said No!",
         imgPath: inImgPath
      }
   );
});

module.exports = router;
