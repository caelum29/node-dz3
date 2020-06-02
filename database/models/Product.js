module.exports = (sequelize, DataTypes) => sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type:  DataTypes.STRING,
            allowNull: false
        },
    },{
        tableName: 'product',
        timestamps: false,
    });

