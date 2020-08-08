const ukraine = { tax: 0.195,
middleSalary: 1789,
vacancies: 11476 };
const latvia = { tax: 0.25,
middleSalary: 1586,
vacancies: 3921 };
const litva = { tax: 0.15,
middleSalary: 1509,
vacancies: 1114 };

//Task 1
function getMyTaxes(salary) {
  const myTax = this.tax * salary;
  return  `You pay ${myTax} tax`;
}
console.log(getMyTaxes.call(ukraine, 3000));
console.log(getMyTaxes.call(latvia, 4000));
console.log(getMyTaxes.call(litva, 5000));

//Task 2
function getMiddleTaxes(country) {
  const itTax = this.tax * this.middleSalary;
  return  `You pay ${itTax} tax in your country`;
}
console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));

//Task 3
function getTotalTaxes(country) {
  const totalTax = this.tax * this.middleSalary* this.vacancies;
  return `Total tax in your country is ${totalTax}`;
}
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

//Task 4
function getMySalary(country) {
  const obj = {};
    obj.salary = Math.floor(Math.random() * (200 + 1 - 1500) + 1500);
    obj.taxes = Math.round(this.tax * obj.salary);
    obj.profit = obj.salary - obj.taxes;

    return `Salary: ${obj.salary} Tax: ${obj.taxes} Profit: ${obj.profit}`;
  }
console.log(getMySalary.call(ukraine));
console.log(getMySalary.call(latvia));
console.log(getMySalary.call(litva));
