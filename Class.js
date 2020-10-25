class Book {
   constructor (title, author, year) {
      this.title = title,
      this.author = author,
      this.year = year
   }
   getBook() {
      console.log(`${this.title} was written by ${this.author} in ${this.year}`);
   }
   getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
   }
   getAge() {
      const years = new Date().getFullYear() - this.year;
      return `${this.title} is ${years} years old.`;
   }
   revise(newYear) {
      this.year = newYear;
      this.revised = true;
   }
   // Don't need to instantiate before using it
   static topBookStore() {
      return 'Bob & Noble';
   }
}

// Use getBook
const book1 = new Book('Book Two', 'Jonh Simith', '2014');

book1.getBook();
console.log(book1);
book1.revise('2020');
console.log(book1);

// Call static method
console.log(Book.topBookStore());