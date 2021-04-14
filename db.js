var sql = require("mysql");
var sqlConnection = sql.createConnection({
    host: "bankingdb.clricylfimm2.us-east-1.rds.amazonaws.com",
    user: "root",
    port: "3306",
    password: "root1234",
    database: "bankcustomers",
    multipleStatements: true
});
// sqlConnection.connect(function(err) {
//     if (!err) {
//         console.log("Connected to SQL");
//     } else {
//         console.log("Connection Failed" + err);
//     }
// });
module.exports=sqlConnection