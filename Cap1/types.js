/*
•  Number
•  String
•  Boolean
•  Symbol (new in ECMAScript 6)
•  Object:
° Function
° Array
° Date
° RegExp
•  Null
•  Undefined
*/

//Number
var aNumber = 555;
var aFloat = 555.0;

//String

console.log("Hippopotamus chewing gum");
//Hippopotamus chewing gum
console.log('Single quoted hippopotamus');
//Single quoted hippopotamus
console.log("Broken \n lines");
//Broken
//lines

/*
•  \n: Newline
•  \t: Tab
•  \b: Backspace
•  \r: Carriage return
•  \\: Backslash
•  \': Single quote
•  \": Double quote
 */
var s = new String("dummy"); //Creates a String object
console.log(s); //"dummy"
console.log(typeof s); //"object"
var nonObject = "1" + "2"; //Create a String primitive 
console.log(typeof nonObject); //"string"
var objString = new String("1" + "2"); //Creates a String object
console.log(typeof objString); //"object"
//Helper functions
console.log("Hello".length); //5
console.log("Hello".charAt(0)); //"H"
console.log("Hello".charAt(1)); //"e"
console.log("Hello".indexOf("e")); //1
console.log("Hello".lastIndexOf("l")); //3
console.log("Hello".startsWith("H")); //true
console.log("Hello".endsWith("o")); //true
console.log("Hello".includes("X")); //false
var splitStringByWords = "Hello World".split(" ");
console.log(splitStringByWords); //["Hello", "World"]
var splitStringByChars = "Hello World".split("");
console.log(splitStringByChars); //["H", "e", "l", "l", "o", " ", 
"W", "o", "r", "l", "d"]
console.log("lowercasestring".toUpperCase()); //"LOWERCASESTRING"
console.log("UPPPERCASESTRING".toLowerCase()); 
//"upppercasestring"
console.log("There are no spaces in the end ".trim()); 
//"There are no spaces in the end"


//Undefined values
 var xl;
 console.log(typeof xl);
//undefined
 console.log(null==undefined);
//true

//Booleans
var pBooleanTrue = true;
var pBooleanFalse = false;

var fBooleanTrue = Boolean(true);
var fBooleanFalse = Boolean(false);

var oBooleanTrue = new Boolean(true);
var oBooleanFalse = new Boolean(false);
console.log(oBooleanTrue); //true
console.log(typeof oBooleanTrue); //object
if(oBooleanFalse){
console.log("I am seriously truthy, don't believe me");
}
//"I am seriously truthy, don't believe me"
if(oBooleanTrue){
console.log("I am also truthy, see ?");
}
//"I am also truthy, see ?"
//Use valueOf() to extract real value within the Boolean object
if(oBooleanFalse.valueOf()){
console.log("With valueOf, I am false"); 
}else{
console.log("Without valueOf, I am still truthy");
}
//>"Without valueOf, I am still truthy"



//The instanceof operator
var aStringObject = new String("string");
console.log(typeof aStringObject); //"object"
console.log(aStringObject instanceof String); //true
var aString = "This is a string";
console.log(aString instanceof String); //false


//Date objects
var today = new Date();
console.log(today.getDate()); //27
console.log(today.getMonth()); //4
console.log(today.getFullYear()); //2015
console.log(today.getHours()); //23
console.log(today.getMinutes()); //13
console.log(today.getSeconds()); //10
//number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(today.getTime()); //1432748611392
console.log(today.getTimezoneOffset()); //-330 Minutes
//Calculating elapsed time
var start = Date.now();
// loop for a long time
for (var i=0;i<100000;i++);
var end = Date.now();
var elapsed = end - start; // elapsed time in milliseconds
console.log(elapsed); //71


//The + operator
var a=25;
a=+a; //No impact on a's value 
console.log(a); //25
var b="70";
console.log(typeof b); //string
b=+b; //converts string to number
console.log(b); //70
console.log(typeof b); //number


//The ++ and -- operators
var a= 1;
var b= a++;
console.log(a); //2
console.log(b); //1


//Boolean operators
