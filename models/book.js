const Users = require('./user');  
//importar los datos restantes de las demas tablas uwu
const Passenger = require('./passenger');
const Flight = require('./flight');
module.exports = (sequelize, DataTypes) => {
const Book = sequelize.define('Book', {
  idbook: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  iduser: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'iduser',
    },
  },
  idflight: {
    type: DataTypes.INTEGER,
    references: {
      model: 'flights',
      key: 'idflight',
    },
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  idpassenger: {
    type: DataTypes.INTEGER,
    references: {
      model: 'passengers',
      key: 'idpassenger',
    },
  },
}, {
  tableName: 'book',
  timestamps: false,
});

return Book;

}