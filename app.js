import mongoose from 'mongoose';
import Employee from "./models/employee"

mongoose.connect('mongodb://localhost/node-mongoose', {
  user: "",
  pass: ""
});


Employee.findOneById("2", function(err, employee){
  console.log(employee)
});