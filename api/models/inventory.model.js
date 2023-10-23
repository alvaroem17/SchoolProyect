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

}
}, {

timestamps:false

})

module.exports=Inventory