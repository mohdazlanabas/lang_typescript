// TYPE > VOID 
const doSomething = (): void => {
    console.log("doSomething");
}

// TYPE > ANY
let foo: any = 'for';
console.log(foo.bar());

// TYPE > NEVER
const doSomething2 = (): never => {
   throw "never";
}

// TYPE > UNKNOWN
let vAny: any = 10;
let vUnknown: unknown = 10;
let s1: string = vAny;


// TYPE > ASSERTIONS
let s2: string = vUnknown as string
let pageNumber: string = '1';
let numericPageNumber: number = pageNumber as unknown as number;

// DOM ELEMENT TYPE
//const someElement = document.querySelector(".foo") as HTMLInputElement;
//console.log('someElement', someElement.value);

// ADD LISTENER
const someElement2 = document.querySelector(".foo") 
someElement2.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log('event', target.value)
})
