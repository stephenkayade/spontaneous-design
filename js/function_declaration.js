// // function declarations
// function greet (firstName = 'john', lastName = 'Doe') {
//     // console.log('hello')
//     return 'hello ' + firstName + ' ' + lastName
// }

// // console.log(greet())


// // function expressions: is putting a function basically as a variable assignment
// const square = function (x) {
//     return x*x
// };

// // console.log(square(8))

// // immediately inokable function expressions = IIFES

// // (function(  ) {
// //     console.log('IIFE Ran..')
// // })()

// (function( name ) {
//     console.log('hello ' + name)
// })('brad')

const todo = {
    add: function() {
        console.log('Add todo..')
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function () {
    console.log('Delete todo...')
}

todo.add()
todo.edit(22)
todo.delete()