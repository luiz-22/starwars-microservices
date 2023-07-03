const axios = require('axios');
const Planets = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
    // const planets = await Planets.list()
    // response(res, 200, planets)

    const planets = await axios.get(`http://database:8004/Planet`)
    response(res, 200, planets.data)
};