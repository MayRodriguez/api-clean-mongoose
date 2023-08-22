const Koder = require("../models/koders.model"); //Nos traemos el modelo de koders de koders.model y lo guardamos en Koder

async function getAll() {
    const allKoders = await Koder.find(); //Buscamos a koder en el modelo
    return allKoders;
}

async function create(koderData) {
    const newKoder = await Koder.create(koderData);
    return newKoder;
}

async function getById(id) {
    // const koder = await Koder.find({_id: id});
    const koder = await Koder.findById(id); //Hacen lo mismo
    return koder;
}

module.exports = {
    getAll,
    create, 
    getById
}