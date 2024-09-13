module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    iduser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    pass: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    secondName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: false
  });

  return User;
};
