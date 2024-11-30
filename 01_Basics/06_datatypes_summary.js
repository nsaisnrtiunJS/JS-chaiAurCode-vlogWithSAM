// There are 2 types of Data types. 1. Primitive and 2. Non-Primitive

// 1.Primitive:

/* Primitive data types divided by 7 data classes.and these 
are:- Number, Boolean, string, null, undefined, symbol, bigInt.
*/

// All dataType's example
// const number = 121
// const anotherNumber = 12.1

// const name1 = "Sam"

// const isTrue = true;

// const outsideTemp = null; (outsideTemp = "")

// let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

// const bigNumber = 1234556789734743n;



// 2.Reference(Non-Primitive):
// 3types:- Array,Object and Function








//+++++++++++++++++++++++++++++++++++++++++++++++++++


              // ++++++++++++MEMORY++++++++++++
   // Stack(Primitive) , Heap(Non-Primitive)  

            // Stack (Primitive)
let myYoutubename = "vlogwithSam"
let anotherName = myYoutubename;
anotherName = "samvlog"
console.log(myYoutubename);
console.log(anotherName);



// Heap (Non-Primitive)

let userOne = {
    Email: "user@gmail.com",
    upi: "abc@apl"
}
let userTwo = userOne;
userTwo.Email = "sam@gmail.com"
userTwo.upi = "sam@apl"
console.log(userTwo);