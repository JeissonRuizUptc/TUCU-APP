module.exports = app =>{

    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();
    //traer user
    router.get("/listarUser", user.findAll);

    app.use("/user-api", router);

}