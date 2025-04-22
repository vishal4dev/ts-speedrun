//Unions
// Unions allow a variable to hold multiple types

let value : string | number; // value can be either a string or a number
value = "Hello"; // valid
value = 42; // valid


function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
    }
    return obj;
  }

  //here in this example we are checking if the obj is a string or an array of strings

  //if its a string we are wrapping it in an array and returning it

/********************************************** */
/**Generics */

// Generics in TypeScript are a powerful feature that allow you to write flexible, reusable, and type-safe code

// Imagine you’re writing a function to return the first element of an array. You want it to work for an array of numbers, strings, or even custom objects. You don’t want to lose type safety by using any (which defeats the purpose of TypeScript). This is exactly where generics shine — they allow your function (or class, or interface) to work with any type, but still be type-safe.

// Here’s a simple example of a generic function that takes an array and returns the first element:
function identity<T>(value: T): T {
    return value;
  }
  
//   T is a type variable — it will be inferred based on the argument passed.

// You can call it like this:

identity<number>(5);       // T is number
identity<string>("hello"); // T is string
identity(true);            // TypeScript infers T as boolean

//generics interfaces
interface Box<T> {
    value: T;
}

const stringBox: Box<string> = { value: "Hello" };
const numberBox: Box<number> = { value: 42 };

//generics classes
class Stack<T> {
    private items: T[] = [];
  
    push(item: T) {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  }
  
//Generics with contrainsts

function logLength<T extends { length: number }>(input: T): void {
    console.log(input.length);
  }
  
  logLength("hello");      // ✅
  logLength([1, 2, 3]);     // ✅
//   logLength(123);           // ❌ Error: number doesn't have length
  
