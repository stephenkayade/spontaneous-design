const name = 'John'
const age = 36
const job = 'Web developer'
const city = 'Miami'

// without template strings (es5)
html = '<ul><li>name: ' + name + '</li><li>Age: ' + age + '</li><li>Job:  ' + job + '  </li><li>City: ' + city + ' </li></ul>'

html = '<ul>' + 
            '<li>name: ' + name + '</li>' +
            '<li>Age: ' + age + '</li>' + 
            '<li>Job:  ' + job + '  </li>' + 
            '<li>City: ' + city + ' </li>' + '</ul>'


function hello () {
    return 'hello'
}

// with template strings (es6)

html = `
        <ul>
            <li>Name: ${name}</li>        
            <li>Age: ${age}</li>        
            <li>Job: ${job}</li>        
            <li>City: ${city}</li>        
            <li>City: ${4 + 4}</li>        
            <li>City: ${hello()}</li>        
            <li>City: ${age > 30? 'over 30':  ' under 30'}</li>        
        </ul>
`

document.body.innerHTML = html;

