const express = require('express');
const db = require('./user-model.js');
const router = express.Router();
// const authenticate = require('../auth/authenticate-middleware').authenticate;
router.get('/', (req, res) =>{
    res.status(200).json({message: "test"})
})

module.exports = router