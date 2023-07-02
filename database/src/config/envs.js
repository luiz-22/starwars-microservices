require("dotenv").config({path: "../../.env"});

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
}
