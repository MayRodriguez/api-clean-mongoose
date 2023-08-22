const express = require("express");
const Koder = require("../usecases/koders.usecase")

const router = express.Router();

router.get("/", async (req, res) => {
    const allKoders = await Koder.getAll();
    res.json({
        message: "All koders", 
        koders: allKoders
    })
})

router.post("/", async (req, res) => {
    await Koder.create(req.body);
    res.json({
        message: "koder added successfully",
        koders: await Koder.getAll()
    })
})

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    const koderById = await Koder.getById(id);
    res.json({
        message: "Koder found", 
        koders: koderById
    })
})

module.exports = router;