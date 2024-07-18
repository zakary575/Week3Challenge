// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const employeesArray = []
const collectEmployees = function() {
  let firstName = window.prompt("Enter first name")
  let lastName = window.prompt("Enter last name")
  let salary = Number(window.prompt("Enter salary"))
  while(isNaN(salary)){
    window.alert('Please input a number!')
    salary = Number(window.prompt('salary'))
}

  employeesArray.push({
      firstName,
      lastName,
      salary
  })

  let keepPlaying = window.confirm('Would you like to add another employee?')
  if (keepPlaying){
  collectEmployees()
  }else(
      window.alert('Thank you')
  )
  return employeesArray
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  if (employeesArray.length === 0) return 0;
  let average = employeesArray.reduce((total, employee) => total + employee.salary, 0) / employeesArray.length;
  console.log(average)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
const index = Math.floor(Math.random() * employeesArray.length);
console.log(employeesArray[index])

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
