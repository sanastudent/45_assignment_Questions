
let current_user : string[] = ["ALi","Sarwar","Amir","Zohaib","Zohan"];

let new_user : string[] = ["ali","sarwar","Ahmad","saad","hamza"];

let lowercase = [];

for(let j = 0 ; j < current_user.length ; j ++){
    lowercase.push(current_user[j].toLowerCase());
}
for ( let i = 0 ; i < new_user.length ; i++){
    if (lowercase.includes(new_user[i])){
        console.log(`${new_user[i]} is not available.`);
    }
    else {
       console.log( `${new_user[i]} is available.`);
    }
}
