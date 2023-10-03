// Sample Employee objects
const employees = [
  {
    id: 1,
    name: 'John Doe',
    department: 'HR',
  },
  {
    id: 2,
    name: 'Jane Smith',
    department: 'IT',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    department: 'Office',
  },
];

// Function to get an Employee object with the specified department
function getEmployeeWithDepartment(department) {
  const employee = employees.find((emp) => emp.department === department);
  return employee || null; // Return null if not found
}

// Usage example
const department = 'Office';
const employeeInOffice = getEmployeeWithDepartment(department);

if (employeeInOffice) {
  console.log('Employee in the Office department:', employeeInOffice);
} else {
  console.log('No employee found in the Office department.');
}
