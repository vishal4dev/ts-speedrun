"use strict";
// // Introduction to TypeScript
// // TypeScript is a superset of JavaScript that adds static typing (the ability to define variable types at compile time) and other features.
// /*
// // Compile-time variable declaration happens when you define variables with types in TypeScript. 
// // This ensures type checking during development and prevents type-related errors.
// let compileTimeVar: string = "This is a compile-time variable";
// // Runtime variable declaration happens when variables are assigned values during the execution of the program.
// // JavaScript handles this dynamically without type checking.
// let runtimeVar = "This is a runtime variable";
// */
// // It helps catch errors during development and improves code maintainability.
// //The js code is compiled to js code and then run in the browser or node.js
// /**
//  * So type ts code -> compile it -> run the ts file like node basics.js 
//  * To compile : command: tsc (in the root folder of the project)
//  */
// // Example 1: Basic Types
// let message: string = "Hello, TypeScript!";
// let count: number = 42;
// let isActive: boolean = true;
// let anyValue: any = "This can be anything"; // any type can hold any value ,the type will be determined at runtime
// //Arrays
// let fruits: string[] = ["Apple", "Banana", "Cherry"];
// let numbers: number[] = [1, 2, 3, 4, 5];
// let scores: Array<number> = [10, 20, 30, 40, 50]; // another way to declare an array
// let mixedArray: (string | number)[] = ["Apple", 1, "Banana", 2]; // array of mixed types
// //Tuples -> a tuple is a fixed-size array (mutable ) where each element can have a different type, its like a mapping of types to values
// let tuple: [number, string] = [1, "One"];
// //An enum
// enum Color {
//     Red,
//     Green,
//     Blue,
// }
// let favoriteColor: Color = Color.Green;
// console.log(message, count, isActive);
// /** ***************************************************/
// //Type Inference
// // Type inference is a feature in TypeScript that allows the compiler to automatically deduce the type of a variable based on its initial value.
// /*********************************************** */
// // Example 2: Functions with Types
// /*
// function functionName(param1: string, param2: number): returnType {}
// */
// //1
// function add(a: number, b: number): number {
//     return a + b;
// }
// console.log(add(5, 10));
// //2
// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Vishal"));
// //3 : Arrow function
// const multiply = (a: number, b: number): number => {
//     return a * b;
// };
// console.log(multiply(5, 10));
// //4 : Optional Parameters
// function greetUser(name: string, age?: number): string {
//     if (age) {
//         return `Hello, ${name}! You are ${age} years old.`;
//     }
//     return `Hello, ${name}!`;
// }
// console.log(greetUser("Vishal"));
// console.log(greetUser("Vishal", 25));
// //5: Default Parameters
// function greetUserWithDefault(name: string, age: number = 18): string {
//     return `Hello, ${name}! You are ${age} years old.`;
// }
// console.log(greetUserWithDefault("Vishal"));
// console.log(greetUserWithDefault("Vishal", 25));
// //6: Rest Parameters
// function sum(...numbers: number[]): number {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// /*********************************************** */
// // Example 3: Interfaces
// interface User {
//     id: number;
//     name: string;
//     isAdmin: boolean;
// }
// const user: User = {
//     id: 1,
//     name: "Vishal",
//     isAdmin: true,
// };
// console.log(user);
// // Example 4: Classes
// class Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     greet(): string {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }
// const person = new Person("Vishal", 25);
// console.log(person.greet());
