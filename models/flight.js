module.exports = (sequelize, DataTypes) => {
    const Flight = sequelize.define('Flight', {
      idflight: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      destinity: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      origin: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      departureTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      arrivalTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      passangers_number: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      idairplane: {
        type: DataTypes.INTEGER,
        references: {
          model: 'airplanes', // Este es el nombre con la que la tabla que genera este modelo esta relacionada
          key: 'idairplane'
        },
        allowNull: false
      }
    }, {
      tableName: 'flights',
      timestamps: false
    });
  
    return Flight;
  };
  