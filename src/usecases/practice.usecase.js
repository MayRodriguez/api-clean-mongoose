const mongoose = require("mongoose");
const Practice = require("../models/practice.model"); //Nos traemos el modelo de koders de koders.model y lo guardamos en Koder
const createError = require("http-errors");

async function getAll() {
    const allPractices = await Practice.find(); //Buscamos a koder en el modelo
    return allPractices;
}

async function create(PracticeData) {
    const newPractice = await Practice.create(PracticeData);
    return newPractice;
}

async function getById(id) {
    if(!mongoose.isValidObjectId(id)){
        // throw new Error("Invalid id")
        throw new createError(400, "Invalid id")
    }
    const practice = await Practice.findById(id); //Hacen lo mismo
    if(!practice) {
        throw new Error(404, "Practice not found")
    }
    return practice;
}

async function deleteById(id) {
    if(!mongoose.isValidObjectId(id)) {
        throw new createError(400, "Invalid id");
    }
    const practiceDeleted = await Practice.findByIdAndDelete(id);
    if(!practiceDeleted) {
        throw new createError(404, "Practice not found")
    }
    return practiceDeleted
}

async function updateById (id, dataToUpdate) {
    if(!mongoose.isValidObjectId(id)) {
        throw new createError(400, "Invalid id");
    }
    const practiceUpdated = await Practice.findByIdAndUpdate(id, dataToUpdate)
    if(!practiceUpdated) {
        throw new createError(404, "Practice not found")
    }
    return practiceUpdated;
}


module.exports = {
    getAll,
    create, 
    getById,
    deleteById,
    updateById
}