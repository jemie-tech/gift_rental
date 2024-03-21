const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('rental','Asiko','Asiko',{
    host:'localhost',
    dialect:'mysql'
})

const testAuthentication = async () => {
    try {
        await sequelize.authenticate()
        console.log("Authentication successful")
    } catch (error) {
        console.log("Authentication failed",error)
    }
}


  testAuthentication()
  
// Authentication successful

module.exports = {
    sequelize
}