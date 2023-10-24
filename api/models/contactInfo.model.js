const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')


const ContactInfo = sequelize.define('contactInfo', {


dni : {
    type: DataTypes.STRING,
    validate: {
        is: {
            args: /^[0-9]{8}[A-Z]$/, 
            msg: "Error: Wrong dni format."
     }
},
},
phone : {

    type: DataTypes.INTEGER
}, 
email : {
    type: DataTypes.STRING,
    validate: {
        is: {
            args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            msg: "Error: Wrong email format."
        }
    }
},  createdAt: {
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
module.exports=ContactInfo