/* Q.2 > Write a JavaScript program to display the reading status 
(i.e. display book name, author name and reading status) of the following books.*/

console.log("start.....");              // test to check if js file is linked or not.
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];
 // first way to do the task is print it in console.
console.log(library);

// second way is using index of array to access the sepcfic values from array of objects
//displaying the name of book name
console.log(library[0].title);
console.log(library[1].title);
console.log(library[2].title);

//displaying the name of author
console.log(library[0].author);
console.log(library[1].author);
console.log(library[2].author);

//displaying the reading status
console.log(library[0].readingStatus);
console.log(library[1].readingStatus);
console.log(library[2].readingStatus);

//out put frpm method 1 :
// 0: Object { author: "Bill Gates", title: "The Road Ahead", readingStatus: true }
// 1: Object { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true }
// 2: Object { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", readingStatus: false }
// length: 3


// output from method 2 :
/*The Road Ahead 
 Walter Isaacson 
 Mockingjay: The Final Book of The Hunger Games 
 Bill Gates 
 Steve Jobs 
 Suzanne Collins 
 true 
 true 
 false*/
