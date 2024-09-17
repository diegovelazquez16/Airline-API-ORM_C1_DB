const User = require('./user');  

module.exports = (sequelize, DataTypes) => {
const DataBank = sequelize.define('DataBank', {
  iddatabank: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bankName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  accountNumber: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  ownerAccount: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  idUser: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'iduser',
    },
  },
}, {
  tableName: 'databank',
  timestamps: false,
});

return DataBank;
}
