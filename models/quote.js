module.exports = (sequelize, DataTypes) => {
    const Quote = sequelize.define('Quote', {
      idquote: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      idflight: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
          model: 'flight', 
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
      total: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
    }, {
      tableName: 'quote',
      timestamps: false
    });
    return Quote;
  };