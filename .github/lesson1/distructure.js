/**
 * Destructuring
*/
const array = ['A', 'B', 'C', 'D']
const [first, second, third, forth] = array;
console.log(first)
console.log(second)
console.log(third)

//spread oprator
const array1 = ['A', 'B', 'C', 'D', 'E']

const [fir1, sec2, ...rest] = array1
console.log(fir1)
console.log(sec2)
console.log(rest)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = [...arr1, ...arr2]

console.log(newArray)

const arr11 = [1, 2, 3, 4];
const arr22 = [5, 6, 7, 8]
const newArr = [0, ...arr11, 3.5, ...arr22]
console.log(newArr)

//Distructuring object

const person = {
    name: "Simon",
    age: 4
}
const { name, age } = person

console.log(name)
console.log(age)

//spread Operator with Object
const myfrend = {
    name1: "Aster",
    age1: 23,
    favFood: "Shiro",
    address: {
        city: 'Somewhere',
        state: 'one of them'
    }
}
const { name1,age1, address: { city } } = myfrend
console.log(name1)
console.log(age1)
console.log(city)

