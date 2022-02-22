// const Sequelize = require("sequelize");
// const dbConfig = require("../server/config/database");
// const dbConn = new Sequelize(dbConfig);




// dbConn.query("select * from cliente", Sequelize.QueryTypes.SELECT)
// .then(
//     data => {
//         console.log(data);
//         dbConn.close();
//     }
// );

const {usuarios} = require("../server/models");

usuarios.findAll({raw: true})
    // .then(data => data.toJSON())
    .then(console.log)