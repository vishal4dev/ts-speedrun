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
let anyValue: any = "This can be anything"; // any type can hold any value ,the type will be determined at runtime




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
