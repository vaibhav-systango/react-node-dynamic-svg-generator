const express = require('express');
const router = express.Router();
const svgGenerator = require('../controllers/svgGenerator');

router.get('/svg', svgGenerator.getSVG); // this route returns the SVG generated from react app 
module.exports = router;