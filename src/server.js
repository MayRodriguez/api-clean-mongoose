const express = require("express");
const kodersRouter = require("./routes/koders.router");
const practiceRouter = require("./routes/practice.router");

const app = express();
app.use(express.json());

app.use("/koders", kodersRouter);
app.use("/practice", practiceRouter);

app.get("/", (req, res) => {
    res.json({
        message: "koders APIv1"
    })   
})

module.exports = app;