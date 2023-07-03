const axios = require('axios');
const Characters = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    await axios.post('http://database:8004/Character', req.body)
    response(res, 201, "Personaje creado.");
};