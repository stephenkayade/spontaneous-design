const person = {
    firstName: 'steve',
    lastname: 'Adediran',
    age: 30,
    email: 'stephenkayade@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'miami',
        state: 'FL'
    },
    getBirthYear: function() {
        return 2017 - this.age
    }
}

let val; 

val = person  

// get specific values

val = person.firstName
val = person['lastName']
val = person.age
val = person.hobbies
val = person.address.state
val = person.address.city
val = person.getBirthYear()

console.log(val)


const people = [
    {
        name: 'John', age: 30
    },
    {
        name: 'Mike', age: 23
    },
    {
        name: 'toyin', age: 30
    },
    {
        name: 'idowu', age: 23
    }
];

for(let i = 0; i < people.length; i++) {
    console.log(people[i].name + ' is ' + people[i].age)
}