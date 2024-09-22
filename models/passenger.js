//importar los datos restantes de las demas tablas uwu

module.exports = (sequelize, DataTypes) => {
const Passenger = sequelize.define('Passenger', {
  idpassenger: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Namepassengers: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  seats: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  typeFlight: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  idTicket: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'passengers',
  timestamps: false,
});

return Passenger;

}