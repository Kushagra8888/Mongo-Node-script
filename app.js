import mongoose from 'mongoose';
import mongoConfig from "./mongo.config"
import Employee from "./models/employee"

const { connectionString, user, pass } = mongoConfig

mongoose.connect(connectionString, {
  user,
  pass
});


Employee.findOneById("2", function(err, employee){
  console.log(employee)
});