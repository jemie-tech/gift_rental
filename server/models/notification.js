const {Sequelize,Model,DataTypes} = require('sequelize')
const {sequelize} = require('./connect')

const Notification = sequelize.define("Notification",{
  message:{
    type:DataTypes.STRING,
    allowNull:false,
  },  
  type:{
    type: DataTypes.ENUM,
    values: ['maintenace','inquiry','notify'],
    defaultValue:'notify',
  },  
  date:{
    type: DataTypes.DATE,
    defaultValue:DataTypes.NOW
  }  
})

module.exports = Notification