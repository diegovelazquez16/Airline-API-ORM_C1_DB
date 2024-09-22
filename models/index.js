const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
'flights_db', // esto lo cambian por el nombre de la db vacia que crearon en mysql
  'root',
  'Ana0507belen', //esta es la contraseña de mysql
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
db.Flight = require('./flight')(sequelize, Sequelize);  
db.Book = require('./book')(sequelize,Sequelize);
db.DataBank= require('./databank')(sequelize,Sequelize);
db.Passenger = require('./passenger')(sequelize,Sequelize);
db.Pay = require('./pay')(sequelize, Sequelize); 
db.Quote = require('./quote')(sequelize, Sequelize); 
db.Ticket = require('./ticket')(sequelize, Sequelize);




module.exports = db;
