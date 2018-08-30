//Lucky winner: who gets Friday off @ Work?

// Sample:
// var myArray = ['January', 'February', 'March'];
// var item = myArray[(Math.random() * myArray.length) | 0];
// console.log('item:', item);

var workers = [
    "Mary",
    "Joe",
    "John",
    "Larry"
];

var luckyWinner = workers[Math.floor(Math.random() * workers.length) | 0];
console.log('winner: ', luckyWinner);