/*
Example: Write a JS program to input a number and output that number
*/
var firstname;
firstname = prompt("Enter your name please: ", "");
document.write ("Hello,");
document.write (firstname);
document.write (" nice to meet you");

/*
Exercise 1: Write a JS program to check two numbers and return true if 
one of the number is 100 or if the sum of the two number is 100
*/

const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a+b) === 100;

console.log(isEqualTo100(90,10));
console.log(isEqualTo100(100,10));

console.log(isEqualTo100(20,10));

/*
Exercise 2: Write a JS program to get the extension of a filename
*/

const getExtensionFile = (str) => str.slice (str.lastIndexOf("."));

console.log(getExtensionFile("index.js"));
console.log(getExtensionFile("index.html"));

/*
Exercise 3: Write a JS program to replace every character in a given
string with character following it in the alphabet
*/

const moveCharsForward = (str_1) => str_1
.split('')
.map(char=>String.fromCharCode(char.charCodeAt(0)+1))
.join(' ');

console.log(moveCharsForward('a'));

/*
Exercise 3: Write a JS program to get a current day
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const currentDate = (date = new Date())=> {
    const days = date.getDate();
    const months = date.getMonth();
    const year = date.getFullYear();
    return `${days}/ ${months} / ${year}`;
}
console.log(currentDate());

/*
Exercise 3: Write a JS program to get a current day
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const a = 16;
const b = 20;

console.log (a+b);