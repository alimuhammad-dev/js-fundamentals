// const person = {
//     firstName :"ali",
//     age: 23
// }

// console.log(person.firstName)
// console.log(person["firstName"])

// for(let val in person){
//     console.log(person.val)
// }


const person = new Map()
person.set('firstName', 'Harshit')
person.set('age', '7')
person.set([1,3],'one')
console.log(person)
// console.log(person.get(1))

for(let key of person.keys()){
console.log(typeof key)                  
}
