const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Student = sequelize.define('student', {
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    course: {
        type: DataTypes.STRING
    },
    lunch: {
        type: DataTypes.BOOLEAN
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
})

module.exports = Student