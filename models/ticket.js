module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
      idticket: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      idflight: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
          model: 'flights', 
          key: 'idflight' 
        }
      },      
      idbook: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'book',
            key:'idbook'
        }
    },
      idairplane: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'airplanes',
            key:'idairplane'
            }
      },
      idpassenger: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'passengers',
            key:'idpassenger'
            }
      },
      idpay: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'pay',
            key:'idpay'
            }
      },
    }, {
      tableName: 'ticket',
      timestamps: false
    });
    return Ticket;
  };