const express = require("express");
const Practice = require("../usecases/practice.usecase")

const router = express.Router();

router.get("/", async (req, res) => {
    try {const allPractices = await Practice.getAll();
    res.json({
        message: "All Practices", 
        data: {
            practices: allPractices
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
        const practiceData = req.body;
        const newPractice = await Practice.create(practiceData);

        res.status(201);
        res.json({
            message: "Practice created",
            data: {
                practice: newPractice,
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
        const {id} = req.params;
        const practiceById = await Practice.getById(id);
        res.json({
            message: `Practice found`, 
            data: {
                practice: practiceById
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

router.delete("/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const practiceDeleted = await Practice.deleteById(id)
        res.json({
            message: "practice deleted",
            data: {
                practice: practiceDeleted.firstName
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
        const practiceUpdated = await Practice.updateById(id, data);
        res.json({
            message: "Practice updated",
            data: {
                practice: practiceUpdated
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

