const deliveries = require("../models/delivery.models.js");

exports.findAll = (req,res) => {
    deliveries.getAll((err, data) => {
        if(err){
        res.status(500).send({
            message: 
                err.message || "some error occurred while retrieving deliveries. "
        });
        }
        else 
        res.send(data);
    });
}