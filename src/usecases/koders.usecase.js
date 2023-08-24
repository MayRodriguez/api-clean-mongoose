const mongoose = require("mongoose");
const Koder = require("../models/koders.model"); //Nos traemos el modelo de koders de koders.model y lo guardamos en Koder
const createError = require("http-errors");

async function getAll() {
    const allKoders = await Koder.find(); //Buscamos a koder en el modelo
    return allKoders;
}

async function create(koderData) {
    const newKoder = await Koder.create(koderData);
    return newKoder;
}

async function getById(id) {
    if(!mongoose.isValidObjectId(id)){
        // throw new Error("Invalid id")
        throw new createError(400, "Invalid id")
    }
    const koder = await Koder.findById(id); //Hacen lo mismo
    if(!koder) {
        throw new Error(404, "koder not found")
    }
    return koder;
}

async function deleteById(id) {
    if(!mongoose.isValidObjectId(id)) {
        throw new createError(400, "Invalid id");
    }
    const koderDeleted = await Koder.findByIdAndDelete(id);
    if(!koderDeleted) {
        throw new createError(404, "koder not found")
    }
    return koderDeleted
}

async function updateById (id, dataToUpdate) {
    if(!mongoose.isValidObjectId(id)) {
        throw new createError(400, "Invalid id");
    }
    const koderUpdated = await Koder.findByIdAndUpdate(id, dataToUpdate)
    if(!koderUpdated) {
        throw new createError(404, "koder not found")
    }
    return koderUpdated;
}


module.exports = {
    getAll,
    create, 
    getById,
    deleteById,
    updateById
}