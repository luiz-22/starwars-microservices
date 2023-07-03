const Films = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    await axios.post('http://database:8004/Film', req.body)
    response(res, 201, "Film creado.");
};