class Book {
   constructor (title, author, year) {
      this.title = title,
      this.author = author,
      this.year = year
   }

   getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
   }
}

// Magazine Sub_class
class Magazine extends Book {
   constructor(title, author, year, month) {
      super(title, author, year);
      this.month = month;
   }
}

// Instantiate Magazine
const mag1 = new Magazine('Book One', 'Jonh Doe', '2013', 'Jully');

console.log(mag1.getSummary());