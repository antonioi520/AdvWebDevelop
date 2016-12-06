/* 
 * These examples do not work as is, they are just code examples on how to do so.
 */

var Employee = require('../models/employee');


  Employee.create({
    firsName: 'firstName',
    lastName: 'lastName',
    department: 'department',
    startDate: 'startDate',
    jobTitle: 'jobTitle',
    salary: 'salary'
    
  },function (err) {           
     /* saved! Callbacks are optional */
     successCB();
  });