"use strict";
// Question no 42
//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['Derren Brown', 'Dai Vernon', 'LAnce Burton', 'Harry Houdini'];
function make_great(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magician[i] = 'The Great' + magiciansArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => { console.log(element); });
}
make_great(magician);
show_magician(magician);
