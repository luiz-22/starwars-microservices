const Planets = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    await axios.post('http://database:8004/Planet', req.body)
    response(res, 201, "Planeta creado.");
};