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
// Question No 18
var placeTovisit = ["Paris", "New york", "Rome", "Saudi Arabia"];
//print in original order
console.log("original order:", placeTovisit);
//  Print array in alphabetical order without modifying the actual list.
console.log("Alphabatical order:", placeTovisit.slice().sort());
//array is still in its original order by printing it.
console.log("original order:", placeTovisit);
//• Print array in reverse alphabetical order without changing the order of the original list.
console.log("reverse order:", placeTovisit.slice().sort().reverse());
//• array is still in its original order by printing it again.
console.log("original order:", placeTovisit);
//• Reverse the order of list. Print the array to show that its order has changed.
console.log("reverse order changed");
placeTovisit.reverse();
console.log(placeTovisit);
//• Reverse the order of list again. Print the list to show it’s back to its original order.
console.log("original order:", placeTovisit.sort());
console.log(placeTovisit);
//• Sort to change  array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reverse alphabatical order changed:", placeTovisit.sort().reverse());
