
// Question no 19

// let guestlist :string[]=["Ali","Maheen","Hina"];
// console.log("Unfortunately! the new dinner table won't arrive, so we can invite only two guests.");

// guestlist.unshift("Rabia","Mano");

// //print message updated list
// console.log("updated list of guest",guestlist);

// // remove guest from the list
// while(guestlist.length >2){
//     let removedGuest :string | undefined = guestlist.pop()
//         if(removedGuest !== undefined){
//             console.log(`Sorry, ${removedGuest} We can't invite you.`)
//         }
    
// }
// //• Print a message to each of the two people still on your list, letting them know they’re still invited.

// guestlist.forEach(guest => {
//     console.log(`Dear ${guest}, You are invited for the dinner.`);
    
// });

// //remove 2 names from the list
// guestlist.splice(0,guestlist.length)
 
// //print updatedempty list
// console.log("updated list of guest:",guestlist);



// Question No 20
let rivers:string[]=["Indus","Ravi","Jehlum","Chenab","Sutlej"];
console.log("list of rivers:");
for (let top of rivers){
    console.log(top);
}