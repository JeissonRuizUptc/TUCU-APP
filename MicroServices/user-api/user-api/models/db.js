const mysql = require("mysql");

const conexion = mysql.createConnection({
    host: 'bcnv7l0hpa73lrwbqc5u-mysql.services.clever-cloud.com',
    database: 'bcnv7l0hpa73lrwbqc5u',
    user: 'ue47yzamhswozx5w',
    password: 'c0Z8uq5dxz4xUe8MtR8B',
});
conexion.connect(function (err) {
    if (err) {
        console.error('error de conexion: ' + err.stack);
        return;
    }
    console.log('conectado con el indentificador ' + conexion.threadId);
});
/** 
conexion.query('SELECT * FROM USER', function(error, results, fields) {
    if (error)
        throw error;
    results.forEach(result => {
        console.log(result);
    });
});
**/
module.exports = conexion;
