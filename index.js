// Write your solution in this file!
let employee = {
  name: 'Oscar',
  streetAddress: '123 Sesame Street'
}

function updateEmployeeWithKeyAndValue(employee, key1, value) {
  let newEmployee = {...employee}
  newEmployee[key1] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key2, value) {
  employee[key2] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key3) {
  let newEmployee = {...employee}
  delete newEmployee[key3]
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key4) {
  delete employee[key4]
  return employee
}
