/*Create a class of `Job` with the following properties:
name
industry
requiresDegree
field
any other relevant properties (get creative!)*/

class Job {
  constructor(name, industry, requiresDegree, field, salary) {
    this.name = name;
    this.industry = industry;
    this.requiresDegree = requiresDegree;
    this.field = field;
    this.salary = salary;
  }

/*The following methods:

getName
getFieldAndIndustry
any other relevant methods (optional)
 */

  getName() {
    return this.name;
  }
  getFieldAndIndustry() {
    return this.field + " " + this.industry;
  }
  degreeRequired() {
    return this.requiresDegree;
  }
  offeredSalary() {
    return this.salary;
  }
}

/*You must also extend the class into something of your choice. 
It must be relevant and make sense as the properties will have to be unique enough.*/

class Nurse extends Job {
    constructor(name, industry, requiresDegree, field, salary, type) {
        super(name, industry, requiresDegree, field, salary); 
        this.type = type;
        }

    get nurseType() {
    return this.type;
  }
}
  
  let nurse = new Nurse("Dia", "Healthcare", true, "Oncology", 750000, "Registered Nurse");
 // console.log(nurse.getName());
 // console.log(nurse.getFieldAndIndustry()); 
 // console.log(nurse.degreeRequired());
 // console.log(nurse.offeredSalary()); 
 // console.log(nurse.nurseType);

/*create three different instances of the Job class
console log any 2 methods for each instance of the class
create an instance of the extended class
console log 2 new methods from the extended class*/
//name, industry, requiresDegree, field, salary

let firstJob = new Job("Teacher", "Education", true, "High School", 55000);
let secondJob = new Job("Software Developer", "Computer Science", false, "Fintech", 90000);
let thirdJob = new Job("Sales Associate", "Retail", false, "Sales",30000);

console.log(firstJob.getName());
console.log(firstJob.getFieldAndIndustry());

console.log(secondJob.getName());
console.log(secondJob.degreeRequired());

console.log(thirdJob.getFieldAndIndustry());
console.log(thirdJob.offeredSalary());

let newNurse = new Nurse("Matt", "Healthcare", true, "Pediatrics",90000, "Registered Nurse");

console.log(newNurse.getName());
console.log(newNurse.nurseType);
