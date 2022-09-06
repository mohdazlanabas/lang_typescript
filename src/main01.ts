// const a ="1";
//console.log("aaa", a);

// VARIABLES
const hello ="world";
// hello = "worldA" // Has Error
let hello2 ="world2";
hello2 = "worldB";
let hello3: string = "world3"
// in JS its Var in TS can be let or const

// FUNCTIONS
const getFullName = (name:string, surname:string):string => {
    return name + " " + surname;
};
console.log(getFullName("Monster", "Lesson"));

// CREATE OBJECTS => INTERFACES
interface User {
    name:string;
    age?: number; // ? is to state not mandatory for interface objects
}
const userA: User = {
    name: "Azlan",
    age: 30
};
const useB: User = {
    name: "Jack",
};
console.log(userA.name);
