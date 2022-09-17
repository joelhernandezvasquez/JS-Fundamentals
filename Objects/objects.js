
// CREATING OBJECTS

// 1.1 Literal Objects 

let empty = {}  // empty objects
const book = {
    name: 'Javascript definitive guide',
    year:'2021',
    price:45,
    author:{
     name:'David Flanigan',
    }
}

console.log(book.author.name); // printing 

// Destructuring the book object
const {author} = book;
const {name} = author;
//console.log(`Prototype of the book object:${book.O}`)

// 1.2 Using the new Operator
const country = new Object(); // creates an empty object

console.log(country);

// 1.3  Object.create()

const person = Object.create({})// creating an empty object
const person2 = Object.create({name:'Joel',lastName:'Hernandez'});
console.log(person2.name);


// Querying and Setting Properties

console.log(book.name);
console.log(book['name']);

// SETTING

book.name = 'The bible of Javascript';
console.log(book.name);
book['name'] = 'The Javascript book';
console.log(book['name']);

// Checking if an object has specific property

console.log(book.hasOwnProperty("name"));
console.log(book.hasOwnProperty("address"));



// to check if a property of the object is enumarable

console.log(typeof book['price'] === 'number');

