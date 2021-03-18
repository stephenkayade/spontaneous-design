const id = 100

// // EQUAL TO
// if(id == 100) {
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// // NOT EQUAL TO


// if(id != 101) {
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// // EQUAL TO VALUE AND TYPE
// if(id === 100) {
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// // NOT EQUAL TO VALUE AND TYPE
// if(id !== 100) {
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// if(typeof id !== 'undefined'){
//     console.log(`the ID is ${id}`)
// } else {
//     console.log('NO ID')
// }

// GREATER THAN OR LESS THAN
// if(id >= 200) {
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// IF ELSE
// const color = 'blue'

// if(color === 'red') {
//     console.log('color is red')
// } else if( color === 'blue' ) {
//     console.log('color is blue')
// } else {
//     console.log('color is not red or blue')
// }

// LOGICAL OPERATORS

const name = 'steve'
const age = 10;

if(age > 0 && age < 12) {
    console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`)
}

// OR ||

if(age < 16 || age < 65) {
    console.log(`${name} can not run in the race, because he is ${age} years old`)
} else {
    console.log(`${name} is registered for the race`)
}

// TERNARY OPERATOR
console.log(id === 100? 'correct' : 'incorrect')

// WITHOUT BRACES

if(id === 100)
    console.log('correct')
else
    console.log('incorrect')