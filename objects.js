// const teas = {
//     name: "Lemon tea",
//     "tea type": "green",
//     caffeine: "low"
// }

// console.log(teas.name)
// // console.log(teas.tea type) gives error. We can't access this key by this way.
// // console.log(teas["type"]) gives error. Incomplete key specified.
// console.log(teas["tea type"])

// teas.origin = "Shillong"
// console.log(teas)

// delete teas.origin //removes a property from object

// //check if tea object has a property origin
// console.log("origin" in teas);

// for (let key in teas) {
//     console.log(key + ": " + teas[key])
// }

// implemention of this fails in arrrow function as arrow function don't have ita own this context
//  const person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };

// person.greet();


const person = { name: "John" };
const additionalInfo = { age: 30, city: "New York" };

const newPerson = Object.assign(person, additionalInfo);
console.log(newPerson); // Output: { name: "John", age: 30, city: "New York" }
