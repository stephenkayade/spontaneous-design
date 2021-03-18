// // FOR LOOP

// for (let i = 0; i < 10;  i++) {
//     if (i === 2) {
//         console.log('2 is my favorite number')
//         continue
//     }

//     if (i === 5) {
//         console.log('stop the loop')
//         break
//     }

//     console.log('Number ' + i)
// }

// WHILE LOOP

// let i = 0
// while (i < 10) {
//     console.log('number ' + i)
//     i++
// }

// let i = 0;

// do {
//     console.log('Number ' + i);
//     i++;
// }

// while (i < 10) 

// loop throught array

const cars = ['ford', 'chevy', 'honda', 'toyota']

// for(let i =0; i < cars.length; i++) {
//     console.log(cars[i])
// }

// for each array loop
// foEach takes in an anonymous function
// cars.forEach(function(car, index, array ) {
//     console.log(`${index}: ${car}`)
//     console.log(array)
// })

// MAP
// const users = [
//     {
//         id: 1,
//         name: 'John'
//     },
//     {
//         id: 2,
//         name: 'sarah'
//     },
//     {
//         id: 3,
//         name: 'karen'
//     },
//     {
//         id: 4,
//         name: 'david'
//     }
// ]

// const ids = users.map(function(user) {
//     return user.id
// })

// console.log(ids)

// FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user) {
    console.log(`${x}: ${user[x]}`)
}

 