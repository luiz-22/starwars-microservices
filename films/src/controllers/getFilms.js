const axios = require('axios');
const Films = require("../data")
const {response} = require("../utils")

module.exports = async (req, res) => {
    // const films = await Films.list()
    // response(res, 200, films)

    const Films = await axios.get(`http://database:8004/Film`)
    response(res, 200, Films.data)
};