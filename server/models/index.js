const {sequelize} = require('./connect')
const User = require('./user')
const Apartment = require('./apartment')
const Notification = require('./notification')
const Payment = require('./payment')



Apartment.hasOne(User,{
    foreignKey:{
        name:'ApartmentId'
    }
})

User.belongsTo(Apartment)

User.hasMany(Notification,{
    foreignKey:{
        name:'Sender'
    }
})
Notification.belongsTo(User)

User.hasMany(Payment,{
    foreignKey:{
        name:'Payee'
    }
})
Payment.belongsTo(User)

const synchronizeModels = async () => {
    try {
      await sequelize.sync({alter:true})
      console.log('Synchronization success')
    } catch (error) {
      console.log('Synchronization failed',error)
    }
}

synchronizeModels()
  