var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    department: {type: String, required: true},
    startDate: {type: Date,  required: true},
    jobTitle: {type: String, required: true},
    salary: {type: Number, required: true}
});


var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;