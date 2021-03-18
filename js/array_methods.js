// create some arrays

const numbers = [43, 56, 33, 23, 44, 36, 5]

const numbers2 = new Array(43, 56, 33, 23, 44, 36, 5)

const fruit = ['Apple', 'Banana', 'Orange', 'Pear']

const mixed = [22, 'Hello', true, undefined, null, {  a:1, b:2  }, new Date()]

console.log(mixed)


let val;

// get array length

val = numbers.length

// check if it is array
val = Array.isArray(numbers)

// get single array
val = numbers[0]

// insert into array
numbers[2] = 100;

// find index of value

val = numbers.indexOf(23)

// // Mutating arrays
// numbers.push(250)

// // add on to end
// numbers.unshift(120)

// // take off from end
// numbers.pop()

// // take off from front
// numbers.shift()

// // splice values
// numbers.splice(1, 3)

// // concatenate array
// val = numbers.concat(numbers2)

// // sorting arrays

// val = fruit.sort()
// val = numbers.sort()

// use the compare function

// val = numbers.sort(function(x, y) {
//     return x - y
// })

// val = numbers.sort(function(x, y) {
//     return y - x
// })

function under50 (num) {
    return num < 50
}

val = numbers.find(under50)

console.log(numbers)
console.log(val)