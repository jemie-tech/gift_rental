const express = require("express");
const cors = require('cors')
const {fetchTenants,fetchTenant,createTenant,editTenant,deleteTenant,UserLogIn} = require("./controllers/UserController")
const {fetchApartments,fetchApartment,createApartment,editApartment,deleteApartment} = require("./controllers/ApartmentController")
require('dotenv').config()



const app = express();
const port = 8000;

app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// app.post("/stk", async (req, res) => {
//   const {phone,amount} = req.body

//   await axios.post(
//     "https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest",
//     {
//       BusinessShortCode:"",
//       Password:'',
//       Timestamp:'',
//       TransactionType:'',
//       Amount:'',
//       PartyA:"",
//       PartyB:"",
//       PhoneNumber:"",
//       CallBackURL:"",
//       AccountReference:"",
//       TransactionDesc:""
//     }
//   )

//   res.json({ 
//     phone: phone,
//     amount:amount 
//   });
  
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// User stuff
app.get('/users',async (req,res) => {
  const users = await fetchTenants()
  res.json({users:users})
})

app.get('/user',async (req,res) => {
  const {id} = req.body
  const users = await fetchTenant({id})
  res.json({users:users})
})

app.post('/user',async (req,res) => {
  const {name,profile,email,phone,password,apartment} = req.body
  const newUser = {
    name,
    profile,
    email,
    phone,
    password,
    apartment
  }
  console.log(newUser)
  await createTenant(newUser)
  res.json("User created")
})

app.post('/login',async (req,res) => {
  const {email,password} = req.body
  
  const response = await UserLogIn({email,password})
  res.json(response)
})

app.put('/user',async (req,res) => {
  const {email,apartment} = req.body
  await editTenant({email,apartment})
})

app.delete('/user',async (req,res) => {
  const {id} = req.body
  await deleteTenant({id})
})


// Apartment stuff
app.get('/apartments',async (req,res) => {
  const apartments = await fetchApartments()
  res.json({apartments:apartments})
})

app.get('/apartment',async (req,res) => {
  const {id} = req.body
  const apartments = await fetchApartments({id})
  res.json({apartments:apartments})
})

app.post('/apartment',async (req,res) => {
  const {name,rent,type} = req.body
  const newUser = {
    name,
    rent,
    type:type.toLowerCase()
  }
  await createApartment(newUser)
  res.json("User created")
})

app.put('/apartment',async (req,res) => {
  const {name,rent} = req.body
  await editApartment({name,rent})
})

app.delete('/apartment/:id',async (req,res) => {
  const {id} = req.params
  console.log(id)
  await deleteApartment({id})
})