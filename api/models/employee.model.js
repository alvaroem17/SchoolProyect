const { DataTypes, Op, Model } = require('sequelize')
const { sequelize } = require('../../database')

const Employee = sequelize.define(
    'employee',
    {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    msg: "Error: Wrong email format."
                }
            }
        },
        password: {
			type: DataTypes.STRING,
            allowNull: false,
        },
        dni: {
			type: DataTypes.INTEGER,
        },
        roleId: {
            type: DataTypes.INTEGER
		},
        subjectId: {
            type: DataTypes.INTEGER
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

module.exports=Employee