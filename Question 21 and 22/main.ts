//Question no 21

//Object

// Data type of object

interface Person{
    age : number ,
    name : string ,
    nationality : string ,
    student : boolean
}

// person object

let person:Person = {
    age : 26 ,
    name : "ALi",
    nationality : "Pakistani",
    student : true
}

 // print person

console.log(person);

// data type of car object

interface Car {
    maker : string,
    color : string ,
    automatic : boolean

}

// car object

let car : Car = {
    maker :'toyota',
    color : 'black',
    automatic  : true

}

// print car

console.log(car);




//Question NO 22

//Intention error

let intentionErrors:number[]=[1,2,3,4,5];
console.log(intentionErrors[10]);

let intentionError:number[]=[1,2,3,4,5];
console.log(intentionError[2]);