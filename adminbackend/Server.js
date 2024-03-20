const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const {EmployeeModel,AddModel} = require('./models/Employee')






const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/employee', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.post("/login", (req, res) => {
    const { username, password } = req.body;
    EmployeeModel.findOne({ username: username })
      .then(user => {
        if (user) {
          if (user.password === password) {
           
            res.json("Success"); // Change to uppercase 'S'
          } else {
            res.json("This password is incorrect"); // Change to a more descriptive message
          }
        } else {
          res.json("No record existed"); // Change to a more descriptive message
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json("An error occurred");
      });
  });
  

app.post('/register',(req ,res)=>{
  EmployeeModel.create(req.body)
  .then(employees => res.json(employees))
  .catch(err => res.json(err))
  
})





app.post('/create',async(req ,res)=>{
  try{
    const {name,email} = req.body;
    const newUser = new AddModel({name,email});
    await newUser.save();
    res.status(201).json({message :"user creater successfully"})
  }
  catch(error){
    console.error(error);
    res.status(500).json({error: "internal server error"})
  }
})



app.get('/', (req, res) => {
  AddModel.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
 });

app.get('/create', (req, res) => {
 AddModel.find()
 .then(users => res.json(users))
 .catch(err => res.json(err))
});



app.delete('/create/:id',  (req, res) => {
 const {id} = req.params;
 AddModel.findByIdAndDelete({_id: id})
 .then(users => res.json(users))
 .catch(err => res.json(err))
});





// app.get('/update/:id', async (req, res) => {
//   try {
//     const employee = await AddModel.findById(req.params.id);
//     res.json(employee);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// app.put('/update/:id', async (req, res) => {
//   try {
//     const { name, email } = req.body;

//     const updatedEmployee = await AddModel.findByIdAndUpdate(
//       req.params.id,
//       { Name: name, Email: email },
//       { new: true } // Return the updated document
//     );

//     if (!updatedEmployee) {
//       return res.json({ updated: false });
//     }

//     res.json({ updated: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ updated: false, error: 'Internal Server Error' });
//   }
// });

app.get('/create/:id', (req,res)=> {
  const id= req.params.id
  AddModel.findById(id)
  .then(users => res.json(users))
  .catch(err => res.json(err))
  });


app.put('/updateUser/:id',  (req, res) => {
  console.log(req.body);
  const id= req.params.id; 
  AddModel.findByIdAndUpdate({_id: id},{name :req.body.name, email:req.body.email},{new: true})
  .then(users => res.json(users))
  .catch(err => res.json(err))
});








app.listen(8080, ()=>{
  console.log("server started")
})