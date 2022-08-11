const express = require("express");

const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

require("./user-api/routes/user.routes.js")(app);

const PORT = process.env.PORT || 4030;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});
