//LECTURE 4
//comparisons : >,<, >=, <=
//Equality check : ==
console.log(null > 0) // false
console.log(null == 0)// false
console.log(null >= 0)// true
//Equality checks & comparisons works differently. Comparisons convert null to a number, treating it as 0. So that is the reason behing 'null >= 0' giving true & 'null > 0' giving false

// Stict check : '===' . It not only checks the calue but also the data type
console.log("2" === 2) // false

console.log("2" > 1); //true, String is converted to number & then compared
