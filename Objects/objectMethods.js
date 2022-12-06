

// Most used Methods in an array

const book = {
    name: 'Javascript definitive guide',
    year:'2021',
    price:45,
    author:{
     name:'David',
     lastName:'Flanigan'
    },
    fullName(){ return `${book.author.name} ${book.author.lastName}`}
}

// 1.1 Object.keys()

const bookArray = Object.keys(book);

// for(props of bookArray )
// {
//     console.log(props);
// }



const bookValues = Object.values(book);
//console.log(bookValues);

const bookEntries = Object.entries(book);
//console.log(bookEntries);

// Serializing an Object
let book2 = JSON.stringify(book);
console.log(book2);
let p = JSON.parse(book2);
console.log(p)

let artist1 = {name:'justin',lastName:'Biber'}
const artist2 = {...artist1}
console.log(artist1)
console.log(artist2);

console.log(book.fullName());