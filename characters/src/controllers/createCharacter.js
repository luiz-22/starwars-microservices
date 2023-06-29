module.exports = async (req, res) => {
    throw Error("Hubo un error")
    res.status(200).send("creando personaje");
};