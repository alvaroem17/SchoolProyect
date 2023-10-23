const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')


const Inventory = sequelize.define('inventory', {

name : {

    type : DataTypes.STRING
}, 

description : {

type : DataTypes.STRING

}, 
reference : {


type : DataTypes.INTEGER

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

module.exports=Inventory