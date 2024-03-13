/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.
  Клас Employee повинен включати:
  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.

  Клас Manager повинен бути підклас класу Employee
  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.
*/
class Employee {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getEmployeeDetails() {
        return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
    }
}
class Manager extends Employee {
    // Реалізуйте конструктор та збільшіть salary на 10000
    constructor(name, department, salary) {
        super(name, department, salary + 10000);
    }
}
// тестування 
const employee = new Employee("John", 'IT', 50000);
console.log(employee.getEmployeeDetails());
const manager = new Manager("Serg", 'HR', 55000);
console.log(manager.getEmployeeDetails());
export {};
