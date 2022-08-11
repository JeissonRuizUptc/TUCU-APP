const user = require("../models/user.models.js");

exports.findAll = (req,res) => {
    user.getAll((err, data) => {
        if(err){
        res.status(500).send({
            message: 
                err.message || "some error occurred while retrieving user. "
        });
        }
        else 
        res.send(data);
    });
}