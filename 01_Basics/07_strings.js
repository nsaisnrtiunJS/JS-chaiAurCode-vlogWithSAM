const firstName = 'Sam'
const lastName = 'Islam'
const repoCount = 25
const name = new String('Sam Islam')

console.log(name)
console.log(`Hello, my name is ${firstName} ${lastName} and I am ${repoCount} years old`)
// console.log("Hello, my name is " + firstName + lastName + " and I am " +  repoCount + " years old.")

// console.log(name.__proto_);
// console.log(name[0]);

// Length property 
// console.log(name.length)

// Do upperCase 
// console.log(name.toUpperCase());
// console.log(name.toLowerCase())

// lets see the letter by putting it's index number 
console.log(name.charAt(2))

// lets see the index numner by putting the letter 
console.log(name.indexOf('m'))

// substring 
const alagV = name.substring(0, 6)
console.log(alagV)

// Slice 
const newString = name.slice(0,9)
const anotherString = name.slice(-9,-4)
console.log(newString)
console.log(anotherString)


// Trim() value 
// const trimValue = "           here is Sam                "
// console.log(trimValue)
// console.log(trimValue.trim())
// console.log(trimValue.trimStart())
// console.log(trimValue.trimEnd())


// if I want to replace somethig the I have to use replace() function 
// const repValue = "helloyaar"
// console.log(repValue.replace('helloyaar', 'Hello Yaar'))
// console.log(repValue.replaceAll('aa', 'AA'))


// if I want to check any words or letter the I have to use includes() methods 
const incString = "hey, are you working."
console.log(incString.includes('you'))


// if I want to devide something according to word/comma/or something else then I have to use split() function 
console.log(name.split(" "))