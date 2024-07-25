//LECTURE 3
//let score = 33 // typeof -> number
//let score = "33" // typeof -> string
// let score = "33abc" // typeof -> string
let score = null // typeof -> object
console.log("Type of Score : " + typeof score)

let valueInNum = Number(score) //Here we forced the value "33"(a string) to Number type
console.log("Type of ValueInNum : "+typeof valueInNum) // type = Number
console.log("Its value : "+ valueInNum)// value is NaN (Not A Number) when string is like for eg : "33abc"
// Value is 0 when score = null

//when converting into a number
/*
"33" -> 33
"33abc" -> NaN
true -> 1, false -> 0
*/

//when converting into a boolean
/*
1 -> true, 0 -> false
"" -> false
"AbdulHadi" -> true
(any number except 0 & -0) -> true
*/