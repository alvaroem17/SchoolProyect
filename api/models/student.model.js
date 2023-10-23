const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')


const Student = sequelize.define('student', {

name: {
    type : DataTypes.STRING
},
surname: {


    type : DataTypes.STRING
}, 
course : {
    type : DataTypes.STRING
}, 
lunch : {

type : DataTypes.BOOLEAN

} 
}, 
{
    timestamps:false
})


module.exports=Student