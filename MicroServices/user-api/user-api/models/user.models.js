const sql = require("./db.js");

const user = function(user){
    this.user_id = user.user_id;
    this.role_id = user.role_id;
    this.city_id = user.city_id;
    this.user_name = user.user_name;
    this.first_name = user.first_name;
    this.surname = user.surname;
    this.phone_number = user.phone_number;
    this.password_user = user.password_user;
    this.table_user_id = user.table_user_id;
    this.enabled_user = user.enabled_user;
}

user.getAll = (result) => {
    let query = "SELECT * FROM USER";
    sql.query(query, (err , res)=> {
    if(err) {
        console.log("error" , err);
        result(null, err);
        return;
    }
    console.log("user : " , res);
    result(null, res);
});
}

module.exports = user;