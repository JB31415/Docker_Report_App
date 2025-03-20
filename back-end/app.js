const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors())

app.post("/", (req, res) => {
    console.log("Connected to React");
    res.redirect("localhost:3000");
});


app.get("/", (req, res) => {
    res.send("Connected to Express");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
);