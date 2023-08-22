require("dotenv").config();
const mongoose = require("mongoose")
const server = require("./src/server")
const PORT = 8080;

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
    .then(() => {
        console.log("DB conected");
        server.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`)
            });
        }) 
    .catch((error) => {
        console.error("DB Error:", error)
    })


