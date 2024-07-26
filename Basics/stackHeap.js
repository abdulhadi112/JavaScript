//LECTURE 5.1
//Stack (Primitive) Heap (Non-Primitive)

let myYoutubeName = "AbdulHadi" //Primitive data type is String 
let anotherName = myChannelName // Here a copy of myYoutubeName is given to anotherName
anotherName = "chaicode" // changes made to anotherName will not affect myYoutubeName

// console.log(myYoutubeName) //AbdulHadi
// console.log(anotherName) //chaicode

let userOne ={
  email : "ah@google.com",
  upi : "ah@oksbi"
} // Non-Primitive type : Object (Check the image stackHeap.jpg for better understanding)

let userTwo = userOne //Here the same reference is given to userTwo which was given to userOne 
userTwo.email = "ah@apple.com" //ek ko update karege toh dusra bhi hoga

console.log(userOne.email) // ah@apple.com
console.log(userTwo.email) // ah@apple.com