// FUNCTIONS=> INTERFACES
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user1 = {
    name: "Bill",
    age: 20,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user2.name);
