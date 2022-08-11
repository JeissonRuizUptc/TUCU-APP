const express = require("express");

const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to ANDICAM application for memberships." });
  });

require("./app/routes/delivery.routes.js")(app);

const PORT = process.env.PORT || 4020;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});
