const server = require("./src/server")

const { Character } = require("./src/database");

// Character
//     .find()
//     .populate("homeworld", ["_id", "name"])
//     .populate("films", ["_id", "title"])
//     .then((res) => console.log(res));

// Character.list().then((res) => console.log(res));

server.listen(8004, () => {
    console.log("Database service on PORT 8004");
})