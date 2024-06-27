
let alien_colors : string = "green";

//  If the alien is green, print a message that the player earned 5 points.

if (alien_colors == "green") {
console.log("The player just earned 5 points.")    
} 

// • If the alien is yellow, print a message that the player earned 10 points.

else if(alien_colors == "yellow") {
    console.log("The player earned 10 points.")
}

// • If the alien is red, print a message that the player earned 15 points.

 else if (alien_colors === "red") {
    console.log("The player earned 15 points.")
}
else{
    console.log("please select right color.")
}


// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// version 2


alien_colors = "yellow";


if (alien_colors == "green") {
    console.log("The player just earned 5 points.")     
    } 
    else if(alien_colors == "yellow") {
        console.log("The player earned 10 points.")
    }
     else if (alien_colors === "red") {
        console.log("The player earned 15 points.")
    }
    else{
        console.log("please select right color.")
    }
    
// version 3


 alien_colors = "red";

if (alien_colors == "green") {
    console.log("The player just earned 5 points.")    
    } 
    else if(alien_colors == "yellow") {
        console.log("The player earned 10 points.")
    }
     else if (alien_colors === "red") {
        console.log("The player earned 15 points.")
    }
    else{
        console.log("please select right color.")
    }
    