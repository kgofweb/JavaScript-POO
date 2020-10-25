// Constructor
function Book(title, author, year) {
   this.title = title;
   this.author = author;
   this.year = year;
}

// getSummary: Create a prototype
Book.prototype.getSummary = function() {
   return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge book
Book.prototype.getAge = function() {
   // Actual year - pubish year
   const years = new Date().getFullYear() - this.year;
   return `${this.title} is ${years} years old.`;
}

// Revise book year
Book.prototype.revise = function(newYear) {
   this.year = newYear;
   this.revised = true;
}

// New instantiate an Object
const book1 = new Book('Book One', 'Jonh Doe', '2015');
const book2 = new Book('Book Two', 'Jonh Simith', '2011');

console.log(book2);
book2.revise('2020');
console.log(book2);