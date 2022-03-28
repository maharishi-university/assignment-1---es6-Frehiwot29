/**
 * Task1 Arrow function,Object Constructor
 * add an attributed to the  prototype 
*/

//with curly bracket
let myFunction1 = (a, b) => {
    return a * b
}
console.log(myFunction1(2, 5))


//with out curily backets
let myFunction = (a, b) => a * b;
console.log(myFunction(2, 5))

let squareNum = a => a * a;
console.log(squareNum(2))



//object constructor

function Person(fName, lName, salary, dob) {
    this.fName = fName;
    this.lName = lName;
    this.salary = salary;
    this.dob = dob;
}
const person1 = new Person("Adonay", "kassa", 12000, '29/10/2018');
console.log(person1.fName)
console.log(person1.lName)
console.log(person1.dob)
console.log(person1.salary)
console.log(`${person1.fName}  ${person1.lName} ${person1.salary} ${person1.dob}`)

person1.fName = "simon"
console.log(person1.fName)
person1.fName = "Kal-ab"
console.log(person1.fName)
person1.dob = '23/09/2021'
console.log(person1.dob)

