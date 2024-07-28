//LECTURE 6
//String is recommended to be denoted by backtick (``)

const myName = "AbdulHadi is best"
const repoCount = 18
// console.log(name + repoCount + "Value") // this type syntax is not recommended, Instead use this
console.log(`Hello my name is ${myName} & my repocount is ${repoCount}`) //Here we make placeholders unke andar joh bhi variables hai usse directly inject kar sakte hai

//Some frequently used String functions
// length[it is not a function ],indexOf(), lastIndexOf(), slice(), substring(), replace(), split(), trim(), toUpperCase(), toLowerCase()

//Length
console.log(myName.length)

//indexOf
console.log(`indexOf : ${myName.indexOf("d")}`)

//lastIndexOf
console.log(`lastIndexOf : ${myName.lastIndexOf("d")}`)

//slice
console.log(`Slice : ${myName.slice(2,5)}`) //Syntax : slice(startIndex, endIndex), it includes the startIndex but not the endIndex. Accepts -ve indices as well(in that case it counts from the end of string. Return empty string if startIndex > endIndex)

//substring
console.log(`Substring : ${myName.substring(2,5)}`)//Syntax : substring(startIndex, endIndex), it includes the startIndex but not the endIndex. Doesn't accept -ve indices. If the startIndex > endIndex then substring() swaps the indices so it always extracts the substring between smaller & larger indices

//replace
console.log(`Replace : ${myName.replace("best","awesome")}`)

//split
console.log("After split : ", myName.split(" "))//Returns an array based on the argument given

//trim
console.log("Trim : ", myName.trim())// Trims space present at the start & end of string 

//toUpperCase & toLowerCase
console.log("UpperCase : ", myName.toUpperCase())
console.log("LowerCase : ", myName.toLocaleLowerCase())