const Apartment = require('../models/apartment')

// const newApartment = {
//  name:''   ,
//  email:'',
//  phone:'',
//  password:'',
//  role:''
// }

const fetchApartments = async () => {
    try {
        
        const tenants = await Apartment.findAll()
        return tenants
    } catch (error) {
        console.log('Failed',error)
    }
}

const fetchApartment = async ({id}) => {
    try {
        
        const tenant = await Apartment.findOne({where:{id:id}})
        return tenant
    } catch (error) {
        console.log('Failed',error)
    }
}

const createApartment = async (newApartment) => {
    try {
        await Apartment.create(newApartment)
        return 'apartment created'
    } catch (error) {
        console.log('Failed',error.message)
    }
}

const createApartments = async (newApartments) => {
    try {
        await Apartment.bulkCreate(newApartments)
        return 'apartments created'
    } catch (error) {
        console.log('Failed',error.message)
    }
}

const editApartment = async ({name,rent}) => {
    try {
        const apartment = await Apartment.update({rent},{where:{name}})
    } catch (error) {
        console.log('Failed',error.message)
    }
}

const deleteApartment = async ({id}) => {
    try {
        await Apartment.destroy({where:{id}})
        return 'Apartment deleted'
    } catch (error) {
        console.log('Failed',error.message)
    }
}


module.exports = {
    fetchApartments,
    fetchApartment,
    createApartment,
    createApartments,
    editApartment,
    deleteApartment
}

 const newApartments = [
    {
        name:'1A',
        rent:'8000',
    },
    {
        name:'1B',
        rent:'8000',
    },
    {
        name:'1C',
        rent:'8000',
    },
    {
        name:'1D',
        rent:'8000',
    },
    {
        name:'1E',
        rent:'8000',
    },
    {
        name:'2A',
        rent:'8000',
    },
    {
        name:'2B',
        rent:'8000',
    },
    {
        name:'2C',
        rent:'8000',
    },
    {
        name:'2D',
        rent:'8000',
    },
    {
        name:'2E',
        rent:'8000',
    },
    {
        name:'3A',
        rent:'8000',
    },
]

// createApartments(newApartments)