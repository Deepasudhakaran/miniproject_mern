
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  fname:String,
  lname:String,
  username: String,
  password: String,

 
});

const AddSchema = new mongoose.Schema({
  name:String,
  email:String,
  

})
const EmployeeModel = mongoose.model('employees', EmployeeSchema);
const AddModel = mongoose.model('users', AddSchema);
module.exports ={ EmployeeModel,AddModel};

