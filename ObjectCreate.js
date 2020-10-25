// Prototype d'un Objet
const bookProtos = {
   getSummary: function() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
   },
   getAge: function() {
      const years = new Date().getFullYear() - this.year;
      return `${this.title} is ${years} years old.`;
   }
}

// Create an Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One',
book1.author = 'Jonh Doe',
book1.year = '2012'

const book2 = Object.create(bookProtos, {
   title: {value: 'Book Two'},
   author: {value: 'Brad'},
   year: {value: '2019'}
});

console.log(book2.getSummary());