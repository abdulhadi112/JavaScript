// LECTURE 2 & 5
let name = "AbdulHadi" //String
let age = 20 // number
let isLoggedIn = true // Boolean
let state //undefined

/*types : number
bigInt
string
boolean
null(stand alone value & a object)
undefined(abhi value assign nhi hui hai)
symbol(for uniqueness)
object (VVIMP topic)
*/

// const num 
// num = 5;
//You also cannot declare a const-variable without assigning a value to it directly
// console.log(num)

console.log(Boolean(100)) //we forced the value 100 to be converted to a Boolean, and the result is true.
//This is because every single value in JavaScript is considered either truthy or falsy. Truthy values result in the value true when coerced into a Boolean value. Falsy values result in the value false.
//Values considered falsy are : false, null, undefined, 0, -0, NaN & empty string

//Primitive Data types
//7 type: string, number,boolean,null,undefined,symbols,Bigint(primitive)

const score=100 //number
const scoreval= 100.3 //also number

const inloggedin = true //boolean
const outsidetemp = null //null
let useremail //undefined

const id = Symbol('123')
const anotherid = Symbol('123')


console.log(id==anotherid); //although value is same but inside symbol it's not

//refrence type(non-primitive)
// Array,Objects,Functions

const heroes = ["saktiman","nagraj", "spiderman"]; //array, typeof -> Object
console.log(typeof heroes)

let myobj={
    name: "AbdulHadi",
    age : 22,
}//object

const myfunction=function(){
    console.log("Hello")

}

console.log("Type of a function" + typeof(myfunction))//sare non premptive data type ka dt object hi bola jata hai
console.log("Type of Object" + typeof(myobj))// typeof -> object
console.log("Type of Hero array" + typeof(heroes)) // typeof -> object