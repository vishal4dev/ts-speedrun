// Introduction to TypeScript

// TypeScript is a superset of JavaScript that adds static typing (the ability to define variable types at compile time) and other features.

/*
// Compile-time variable declaration happens when you define variables with types in TypeScript. 
// This ensures type checking during development and prevents type-related errors.

let compileTimeVar: string = "This is a compile-time variable";

// Runtime variable declaration happens when variables are assigned values during the execution of the program.
// JavaScript handles this dynamically without type checking.

let runtimeVar = "This is a runtime variable";

*/

// It helps catch errors during development and improves code maintainability.

//The js code is compiled to js code and then run in the browser or node.js
/**
 * So type ts code -> compile it -> run the ts file like node basics.js 
 * To compile : command: tsc (in the root folder of the project)
 */

// Example 1: Basic Types

let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;

let anyValue: any = "This can be anything"; // any type can hold any value ,the type will be determined at runtime, no type checking

//safer than any, as it requires type checking before use
let unknownValue: unknown = "This can also be anything"; // unknown type is safer than any, as it requires type checking before use

//Type Assertion : checks the type of a variable at runtime and allows you to treat it as a specific type. It is used when you are sure about the type of a variable but TypeScript cannot infer it.
let someVal:unknown = 1;
if(typeof someVal === 'number'){
    const res = someVal + 1; // type assertion
}else if(typeof someVal === 'string'){
    const res = someVal + "1"; // type assertion

}

//Anothe way to handle unknown type is to use type casting

let someVal2: unknown = 1;
const rse = (someVal2 as number) + 1; // type casting

/**
 * //Example as to why use unknown type
 * 
 * function processValue(value: unknown): void {
 *    if (typeof value === "string") {  
 *       console.log("String value:", value);
 *   } else if (typeof value === "number") {
 *      console.log("Number value:", value);
 *   } else {
 *      console.log("Unknown type");
 *   }
 * 
 * }
 * 
 * processValue("Hello"); // String value: Hello
 * processValue(42); // Number value: 42
 * processValue(true); // Unknown type
 * 
 */




//Arrays
let fruits: string[] = ["Apple", "Banana", "Cherry"];

let numbers: number[] = [1, 2, 3, 4, 5];

let scores: Array<number> = [10, 20, 30, 40, 50]; // another way to declare an array

let mixedArray: (string | number)[] = ["Apple", 1, "Banana", 2]; // array of mixed types



//Tuples -> a tuple is a fixed-size array (mutable ) where each element can have a different type, its like a mapping of types to values

let tuple: [number, string] = [1, "One"];

//An enum
enum Color {
    Red,
    Green,
    Blue,
}

let favoriteColor: Color = Color.Green;

console.log(message, count, isActive);

/** 
undefined and null - > null: use it when you want to represent an absence of value,

undefined: use it when a variable has been declared but not assigned a value, it acts as a placeholder. (the type becomes any)

Primite types: string, number, boolean, null, undefined 

Type	         Predicate
string	       typeof s === "string"
number	       typeof n === "number"
boolean	       typeof b === "boolean"
undefined	   typeof undefined === "undefined"
function	   typeof f === "function"
array	       Array.isArray(a)
***************************************************/

//Type Inference

// Type inference is a feature in TypeScript that allows the compiler to automatically deduce the type of a variable based on its initial value.

/*********************************************** */

// Example 2: Functions with Types
/*
function functionName(param1: string, param2: number): returnType {}
*/

//1
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10));

//2
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Vishal"));


//3 : Arrow function
const multiply = (a: number, b: number): number => {
    return a * b;
};
console.log(multiply(5, 10));

//4 : Optional Parameters
// Optional parameters are parameters that may or may not be provided when calling a function. They are denoted by a question mark (?) after the parameter name.
function greetUser(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    return `Hello, ${name}!`;
}
console.log(greetUser("Vishal"));
console.log(greetUser("Vishal", 25));

//5: Default Parameters
function greetUserWithDefault(name: string, age: number = 18): string {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greetUserWithDefault("Vishal"));
console.log(greetUserWithDefault("Vishal", 25));

//Call function function
//The function can be called with a function reference and the parameters can be passed to it.

// This is useful when you want to pass a function as an argument to another function.
function callFunction(fn: (name: string) => void, name: string): void {
    fn(name);
}

//Example function to be passed
function mul(x:number,y:number):number{
    return x*y;
}

function div(x:number,y:number):number{
    return x/y;
}

//Calling the function
function callFunc(fn:(x:number,y:number) => number,x:number,y:number):number{
    return fn(x,y);
}

console.log(callFunc(mul, 5, 10)); // Output: 50



//6: Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

/*********************************************** */
// Example 3: Interfaces
/**Here are some key points about interfaces in TypeScript in easy words:
 * 1. Interfaces are used to define the structure of an object.
 * 
 * 2. They allow you to specify the types of properties and methods that an object should have.
 * 
 * 3. Interfaces can be used to enforce a contract for classes, ensuring that they implement specific properties and methods.
 * 
*/
interface User {
    id: number;
    name: string;
    isAdmin: boolean;
}

const user: User = {
    id: 1,
    name: "Vishal",
    isAdmin: true,
};

console.log(user);

/*********************************** */
// Example 4: Classes
/**
 * 1. Classes are blueprints for creating objects in TypeScript.
 * 
 * 2. They can have properties (variables) and methods (functions) that define the behavior of the objects created from them.
 * 
 * 3. Classes can implement interfaces, ensuring that they adhere to a specific structure.
 * 
 * 4. You can create instances of classes using the `new` keyword.
 * 
 * 5. Classes can also have access modifiers like `public`, `private`, and `protected` to control visibility.
*/
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person = new Person("Vishal", 25);
console.log(person.greet());

/**Difference between interface and class 
 * 1. Interface is a contract (a set of rules or structure) that defines the shape or structure of an object, ensuring that it adheres to a specific format.
 * 
 * 2. A class, on the other hand, is a blueprint for creating objects with properties and methods, and it can include implementation details.
 */

/********************************************** */
/* Optional Chaining */
//used to safely access deeply nested properties of an object without having to check if each property in the chain exists. It prevents runtime errors when trying to access properties of `undefined` or `null` values.
const arr = [{name: "Vishal", age: 25}, {name: "John", age: 30}];

const Username = arr.pop()?.name; // Optional chaining

/********************************************** */
/*Bang operator */
// The bang operator is used to assert that a value is not null or undefined. It tells TypeScript that you are sure the value will not be null or undefined at that point in the code.

const userName = arr.pop()!.name; // Bang operator
// This is useful when you are certain that the value will not be null or undefined, but TypeScript cannot infer it.
// However, be cautious when using the bang operator, as it can lead to runtime errors if the value is indeed null or undefined.
/********************************************** */

/*Bang vs optional chaining* */
// The bang operator (`!`) is used to assert that a value is not null or undefined, while optional chaining (`?.`) is used to safely access properties of an object without throwing an error if the object is null or undefined.
// Optional chaining returns `undefined` if the value is null or undefined, while the bang operator will throw an error if the value is null or undefined.
// Use optional chaining when you want to safely access properties, and use the bang operator when you are sure the value is not null or undefined.
/********************************************** */
