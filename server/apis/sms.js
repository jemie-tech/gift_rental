require('dotenv').config()

const client = require('twilio')(process.env.AccountSID,process.env.AuthToken)

const sendSms = async (body) => {
    let msgOptions = {
        from:process.env.twilioPhone,
        to:process.env.recipient,
        body
    }
    try {
        const message = await client.messages.create(msgOptions)
        console.log(message)
    } catch (error) {
        console.error(error)
    }
}

sendSms("Hi Jemie")