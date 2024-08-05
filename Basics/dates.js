//Lecture 7
// Dates 

let myDate = new Date() // Created a object of Date
// console.log(myDate); //Not readable output
// console.log(myDate.toString());//Mon Jul 29 2024 17:28:49 GMT+0530 (India Standard Time)
//console.log(myDate.toDateString())// Returns just (Mon Jul 29 2024)
// console.log(myDate.toLocaleString()) // Returns dd/mm/yyyy & time in 12-hour format

// let createdDate = new Date(2023, 7, 8)
let createdDate = new Date(2023, 7, 8, 5, 3)
// console.log(createdDate.toLocaleDateString()); //'8/8/23', Months start from 0 index
// console.log(createdDate.toLocaleString()); // '8/8/2023, 5:03:00 am' 

let timeStamp = Date.now() // time stamp used usually in poll, to decide who gave the fastest answer etc 
// console.log(timeStamp); // We get a long int. This value is in mseconds calculated from 1st Jan 1970
// console.log(createdDate.getTime()) //Since createdDate is an object we can also call different methods. We get milliseconds value from 1/1/1970 to the date passed, in this case 8/8/23