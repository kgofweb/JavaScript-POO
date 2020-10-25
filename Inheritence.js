// Constructor
function Book(title, author, year) {
   this.title = title;
   this.author = author;
   this.year = year;
}

// Create a prototype
Book.prototype.getSummary = function() {
   return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Create Magazine Constructor
function Magazine(title, author, year, month) {
   Book.call(this, title, author, year);
   this.month = month;
}

// Inherit prototye of Book
Magazine.prototype = Object.create(Book.prototype);

// Instantiate magazine
const mag1 = new Magazine('Book One', 'M. Scofield', '2006', 'March');

// Use Magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary());
console.log(mag1);