const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Subject = sequelize.define("subjects", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: function () {
            return new Date();
        },
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: function () {
            return new Date();
        },
    },
});

module.exports=Subject