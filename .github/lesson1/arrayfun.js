
//filter
let array = {
    minAge: 18,
    maxAge: 27,
    findAge(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    { age: 16 },
    { age: 25 },
    { age: 23 },
    { age: 30 },
];
let myUsers = users.filter(array.findAge, array)

console.log(myUsers.length)
console.log(myUsers[0].age)
console.log(myUsers[1].age)

//map 
let student = [
    { name: "Adonay", age: 7 },
    { name: "simon", age: 4 },
    { name: "Adonay", age: 2 },
];

let findAgeName = student.map(item => item.age > 4)
//console.log(findAgeName)

//splice,slice
let arr = ["CS303", "student", "javascript", "Node js"];
console.log(arr.splice(1, 2))
console.log(arr.slice(1, 2))

//find
let myuser = [
    { id: 1, name: "Adonay" },
    { id: 2, name: "Simon" },
    { id: 3, name: "kal-ab" }
]
let myFind = myuser.find(item => item.id === 1)
console.log(myFind.name);

let myFind1 = myuser.filter(item => item.id < 3);
console.log(myFind1.length);

//sort
let arr1 = [1, -2, 12, 2, 0, 8]
arr1.sort((a, b) => {
    return a - b
})
console.log(arr1)
