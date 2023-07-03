const axios = require('axios');
const Characters = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
    // const characters = await Characters.list()
    // response(res, 200, characters)

    const characters = await axios.get(`http://database:8004/Character`)
    response(res, 200, characters.data)
};
