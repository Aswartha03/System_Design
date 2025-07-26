// Liskov Substitution Principle


// Problem: Consider the following inheritance setup:

// class Bird {
//   fly(): void {
//     console.log("Flying...");
//   }
// }

// class Ostrich extends Bird {
//   fly(): void {
//     throw new Error("Ostriches can't fly!");
//   }
// }

// Task: Identify the Liskov Substitution Principle violation and fix the design.

// Solution : 

// Violation in the code  :
// Parent class able to fly , but child class not able to fly . this violates the LSP 


class Bird{
    fly():void{
        console.log("I can Fly!!")
    }
}

class Eagle extends Bird{
    fly(): void {
        console.log("Eagles can fly!!")
    }
}

// Here child have all the functionalities in which parent class have.

