const User = require('../models/user')
const Apartment = require('../models/apartment')

Apartment.hasOne(User,{
    foreignKey:{
        name:'ApartmentId'
    }
})

User.belongsTo(Apartment)


// const newUser = {
//  name:''   ,
//  email:'',
//  phone:'',
//  password:'',
//  role:''
// }

const fetchTenants = async () => {
    try {
        
        const tenants = await User.findAll()
        return tenants
    } catch (error) {
        console.log('Failed',error)
    }
}

const fetchTenant = async ({id}) => {
    try {
        
        const tenant = await User.findOne({where:{id:id}})
        return tenant
    } catch (error) {
        console.log('Failed',error)
    }
}

const UserLogIn = async ({user}) => {
    try {
        const {email,password} = user
        const tenant = await User.findOne({where:{email:email}})
        if (tenant != null) {
            if (tenant.password == password) return tenant
        }
        return null
    } catch (error) {
        console.log('Failed',error)
    }
}

const createTenant = async (newUser) => {
    try {
        const {apartment,name,email,phone,password} = newUser
        const apartmentFound = await Apartment.findOne({where:{name:apartment}})

        await User.create({
            name,
            email,
            phone,
            password,
            ApartmentId:apartmentFound?.id
            // ApartmentId:apartmentFound?.id
        })
        return 'user created'
    } catch (error) {
        console.log('Failed',error.message)
    }
}

const createTenants = async (newUsers) => {
    try {
        await User.bulkCreate(newUsers)
        return 'users created'
    } catch (error) {
        console.log('Failed',error.message)
    }
}

const editTenant = async ({email,apartment}) => {
    try {
        const user = await User.update({ApartmentId:apartment},{where:{email:email}})
    } catch (error) {
        console.log('Failed',error.message)
    }
}

const deleteTenant = async ({id}) => {
    try {
        await User.destroy({where:{id:id}})
        return 'User deleted'
    } catch (error) {
        console.log('Failed',error.message)
        return error.message
    }
}

const deleteTenants = async() => {
    for (let i = 0; i < 6; i++){
        await User.destroy({where:{id:i}})
    }
}



const newUsers = [
    {
        name:'Jemimah Asiko',
        profile:'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
        email:'asikojemie@gmail.com',
        phone:'011280233',
        password:'asikojemi',
        ApartmentId:1
    },
    {
        name:'Paul Emile',
        profile:'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
        email:'emilepaul@gmail.com',
        phone:'011280232',
        password:'emilepaul',
        ApartmentId:2
    },
    {
        name:'Ron Mbatia',
        profile:'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww',
        email:'mbatiaron@gmail.com',
        phone:'011280133',
        password:'mbatiaron',
        ApartmentId:3
    },
    {
        name:'Val Wanjiru',
        profile:'https://plus.unsplash.com/premium_photo-1683141202259-ee13ddd953fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
        email:'wanjiruval@gmail.com',
        phone:'011290233',
        password:'wanjiruval',
        ApartmentId:4
    },
    {
        name:'Mark Asigo',
        profile:'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww',
        email:'asigomark@gmail.com',
        phone:'071280233',
        password:'asigomark',
        ApartmentId:5
    },
]
//  createTenants(newUsers)

module.exports = {
    fetchTenants,
    fetchTenant,
    createTenants,
    createTenant,
    editTenant,
    deleteTenant,
    UserLogIn
}