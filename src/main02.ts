// FUNCTIONS=> INTERFACES
class User{}

interface IUser {
    name:string;
    age?: number; // ? is to state not mandatory for interface objects\
    getMessage(): string
}
const user1: IUser = {
    name: "Bill",
    age: 20,
    getMessage() {
        return "Hello" + name;
    },
};
const user2: IUser = {
    name: "Jack",
    getMessage () {
        return "Hello" + name;
    },
};
console.log(user2.name);