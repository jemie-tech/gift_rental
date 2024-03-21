const {Sequelize,Model,DataTypes} = require('sequelize')
const {sequelize} = require('./connect')

const Apartment = sequelize.define("Apartment",{
  name:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },  
  rent:{
    type:DataTypes.STRING,
    allowNull:false,
  },  
  type:{
    type: DataTypes.ENUM,
    values: ['bedsitter','one bedroom','two bedroom','studio'],
    defaultValue:'bedsitter',
  },
  state:{
    type: DataTypes.ENUM,
    values: ['vacant','occupied'],
    defaultValue:'bedsitter',
  }  
})

module.exports = Apartment