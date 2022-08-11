const sql = require("./db.js");

const delivery_man = function(delivery_man){
    this.delivery_man_id = delivery_man.delivery_man_id;
    this.user_id = delivery_man.user_id;
    this.delivery_man_name = delivery_man.delivery_man_name;
}

delivery_man.getAll = (result) => {
    let query = "SELECT * FROM DELIVERY_MEN";
    sql.query(query, (err , res)=> {
    if(err) {
        console.log("error" , err);
        result(null, err);
        return;
    }
    console.log("deliver_man : " , res);
    result(null, res);
});
}

module.exports = delivery_man;