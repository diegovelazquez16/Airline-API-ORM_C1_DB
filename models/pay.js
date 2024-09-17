module.exports = (sequelize, DataTypes) => {
    const Pay = sequelize.define('Pay', {
      idpay: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      idquote: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
        model: 'quote', 
          key: 'idquote' 
        }
      },      
      iddatabank: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'databank',
            key:'iddatabank'
        }
      },
      totalpay: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
    }, {
      tableName: 'pay',
      timestamps: false
    });
    return Pay;
  };