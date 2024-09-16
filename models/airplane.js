module.exports = (sequelize, DataTypes) => {
    const Airplane = sequelize.define('Airplane', {
      idairplane: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
      },
      NameP: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      registration: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      airline: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'airplanes',
      timestamps: false
    });
  
    return Airplane;
  };
  