//Question No 14
//Define of an erray
//  let guestList :string[]=["Ali","Javed","Zohaib"];
// guestList.forEach(guest => {
//     console.log(`Hello ${guest}, You are cordially invited  for dinner.`)
// });
// Question No 15
//  let guestLists : string[]=["Ali","javed","Zohaib","Ahmad"];
//  //print the name who can't make it.
//  let unableAttend :string= guestLists.splice(1,1)[0]
//  console.log(`${unableAttend} can't make the dinner.`);
//  //push
//  guestLists.push("Ahmad");
//  //print a messsage
//  guestLists.forEach(guest => {
//     console.log(`Dear ${guest}, You are cordially invited.
//     `)
//  });
//Question No 16
var guestLists = ["Ali", "javed", "Zohaib", "Ahmad"];
console.log("Great news we find a bigger table");
guestLists.unshift("Hammad");
guestLists.splice(Math.floor(guestLists.length / 2), 0, 'Arif');
guestLists.push("Amir");
console.log(guestLists);
guestLists.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are all cordially invited to dinner."));
});
