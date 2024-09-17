const User = require('./user');  
//importar los datos restantes de las demas tablas uwu
const Passenger = require('./passenger');
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
      model: User,
      key: 'iduser',
    },
  },
  idflight: {
    type: DataTypes.INTEGER,
    references: {
      model: Flight,
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
      model: Passenger,
      key: 'idpassenger',
    },
  },
}, {
  tableName: 'book',
  timestamps: false,
});

return Book;

}