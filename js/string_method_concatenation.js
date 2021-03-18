const firstName = "stephen"
const lastName = 'Adediran'
age = 36
const str = 'hello there my name is Steve'

let val

val = firstName + lastName

// concatenation

val = firstName + ' ' + lastName

// Append
val = 'Brad ';
val += 'Traversy'

val = 'Hello, my name is ' + firstName + ' and i am ' + age

// Escaping

val = 'that\'s awesome, i can\'t wait'

// Length

val = firstName.length;

// concat()
val = firstName.concat(' ', lastName)

// change case ()
val = firstName.toUpperCase()
val = firstName.toLowerCase()

val = firstName[0]

// indexOf()
val = firstName.indexOf('t')
val = firstName.lastIndexOf('t')


// charAt()
val = firstName.charAt('2')

// get last character
val = firstName.charAt(firstName.length - 1 )

// substring

val = firstName.substring(0, 4)

// slice
val = firstName.slice(0, 4)
val = firstName.slice(-7)

// split
val = str.split(' ')

// replace()  
val = str.replace('Steve', 'Adegboyega')

// includes()
val = str.includes('hello')
val = str.includes('foo')


console.log(val)
