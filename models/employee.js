var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({ 
    countryCode : String, 
    employmentStatuses: String,
    employmentStatuses: [{
      effectiveDate : Date, 
      statusCode : String
    }]
});


var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;