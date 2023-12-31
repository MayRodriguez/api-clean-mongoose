const express = require("express");
const Koder = require("../usecases/koders.usecase")

const router = express.Router();

router.get("/", async (req, res) => {
    try {const allKoders = await Koder.getAll();
    res.json({
        message: "All koders", 
        data: {
            koders: allKoders
        }
    })
    } catch (err) {
        res.status(500);
        res.json({
            message: "something went wrong",
            error: err.message
        })
    }

})

router.post("/", async (req, res) => {
    try {
        const koderData = req.body;
        const newKoder = await Koder.create(koderData);

        res.status(201);
        res.json({
            message: "Koder created",
            data: {
                koder: newKoder,
            },
        });
    } catch (err) {
        const status = err.name === "ValidationError" ? 400 : 500; 
        res.status(status)
        res.json({
            message: "something went wrong",
            error: err.message,
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const koderById = await Koder.getById(id);
        res.json({
            message: `Koder found: ${koderById.firstName}`, 
            data: {koderById}
        })
    } catch(err) {
        res.status(err.status || 500);
        res.json({
            message: "something went wrong",
            error: err.message
        })
    }
})

router.delete("/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const koderDeleted = await Koder.deleteById(id)
        res.json({
            message: "koder deleted",
            data: {
                koder: koderDeleted.firstName
            }
        })
    } catch (err){
        res.status(err.status || 500);
        res.json({
            message: "something went wrong",
            error: err.message
        })
    }
})

router.patch("/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const koderUpdated = await Koder.updateById(id, data);
        res.json({
            message: "koder updated",
            data: {
                koder: koderUpdated
            }
        })
    } catch(err) {
        res.status(err.status || 500);
        res.json({
            message: "something went wrong",
            error: err.message
        })
    }
})

module.exports = router;

