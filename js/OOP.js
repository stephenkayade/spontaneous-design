class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        return `${this.title} was written by ${yhis.author} in ${this.year}`
    }
}

// instantiate object
const book1 = new Book('Book One', 'John Doe', '2013');

console.log(book1)