// Constructor
function Book(title, author, year) {
   this.title = title;
   this.author = author;
   this.year = year;
   
   this.getSummary = function() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
   }
}

// New instantiate an Object
const book1 = new Book('Book One', 'Jonh Doe', '2015');
const book2 = new Book('Book Two', 'Jonh Simith', '2011');

console.log(book2.getSummary());