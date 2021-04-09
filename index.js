// Write your solution in this file!
const employee = {} 



function updateEmployeeWithKeyAndValue(employee, key, value){
return Object.assign({}, employee,{[key]: value});
}
// 1) "before each" hook for "returns an employee with the original key value pairs and the new key value pair"
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value
  return employee;
 }
// 2) updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
 function deleteFromEmployeeByKey(employee, key){
     const newEmployee = Object.assign({}, employee);
     delete newEmployee[key];
     return newEmployee;
 }
// 3) deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
// 4) does not modify the original employee (it is non-destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) 
    {       delete employee[key];
            return employee;  }
 
// 5) returns employee without the delete key/value pair
// 6) modifies the original employee