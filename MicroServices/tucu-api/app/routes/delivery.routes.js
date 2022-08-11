module.exports = app =>{

    const deliveries = require("../controllers/delivery.controller.js");

    var router = require("express").Router();
    //traer deliveries
    router.get("/listarDelivery", deliveries.findAll);

    app.use("/delivery-api", router);

}