const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const ClassRoom = sequelize.define(
    'classroom', {
        name: {
            type: DataTypes.STRING,
        },
        floor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.INTEGER,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: function () {
                return new Date()
            }
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: function () {
                return new Date()
            }
        }
    },
)
module.exports = ClassRoom