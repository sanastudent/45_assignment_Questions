//assignment no 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let nameWithWhitespace : string = "\t \n Sana \t \n";
console.log("name with white space:", nameWithWhitespace);

let strippedName : string = nameWithWhitespace.trim();
console.log("stripped Name:",strippedName);




// Question no 7
//Number Eight: Write addition, subtraction, multiplication,
// and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.



let additionResult:number= 5+3;
console.log("Addition Result:", additionResult);

let subtractionResult:number= 10-2;
console.log("Subtraction Result:",subtractionResult);

let multiplicationResult:number= 4*2;
console.log("Multiplication Result:", multiplicationResult);

let divisionResult:number= 16/2;
console.log("Division Result:", divisionResult);




//Question no 8

// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);




// assignment no 9
//Favorite Number: Store your favorite number in a variable.
// Then, using that variable, create a message that reveals your favorite number. Print that message.

let favouriteNumber ='3';
console.log(`My favourite number is ${favouriteNumber
}`)