const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Roles = sequelize.define(
    'roles',
    {
		type: {
			type: DataTypes.STRING,
			allowNull: false,
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

module.exports=Roles