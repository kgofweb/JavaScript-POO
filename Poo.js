// const s1 = 'Hello';
// console.log(s1.toUpperCase());
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// DOM windows
// console.log(window);
// alert(1);

// console.log(navigator.appVersion);


// Object Litteral
const book1 = {
  title: 'Book One',
  author: 'Jonh Doe',
  year: '2015',
  getSummary: function() {
   return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

const book2 = {
  title: 'Book Two',
  author: 'Jonh Smith',
  year: '2011',
  getSummary: function() {
   return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));