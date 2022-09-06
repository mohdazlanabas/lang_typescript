// TYPE > VOID 
var doSomething = function () {
    console.log("doSomething");
};
// TYPE > ANY
var foo = 'for';
console.log(foo.bar());
// TYPE > NEVER
var doSomething2 = function () {
    throw "never";
};
// TYPE > UNKNOWN
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// TYPE > ASSERTIONS
var s2 = vUnknown;
var pageNumber = '1';
var numericPageNumber = pageNumber;
// DOM ELEMENT TYPE
//const someElement = document.querySelector(".foo") as HTMLInputElement;
//console.log('someElement', someElement.value);
// ADD LISTENER
var someElement2 = document.querySelector(".foo");
someElement2.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
