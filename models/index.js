const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
'Test_ORM', // esto lo cambian por el nombre de la db vacia que crearon en mysql
  'root',
  'v3lazqu3z', //esta es la contraseña de mysql
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

module.exports = db;
