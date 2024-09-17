const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
'Test_ORM', // esto lo cambian por el nombre de la db vacia que crearon en mysql
  'root',
  'adrian0710200512#12#', //esta es la contraseña de mysql
  {
    host:"localhost",
    dialect: "mysql"
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos
db.User = require('./user')(sequelize, Sequelize);
db.Airplane = require('./airplane')(sequelize, Sequelize);
db.Book = require('./book')(sequelize,Sequelize);
db.DataBank= require('./databank')(sequelize,Sequelize);
db.Passenger = require('./passenger')(sequelize,Sequelize);




module.exports = db;
