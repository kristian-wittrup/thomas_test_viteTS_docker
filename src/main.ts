// main.ts file
import { doubleNumber } from './dn.js';

const resultModules: number = doubleNumber(5);
console.log("Ex5: Doubled:", resultModules);




/**
* 
* Assignment 7: Interface with Classes
* Assignment Description:
* Understanding how interfaces work with classes is crucial. Define an interface YourInterface with properties property1, property2, and a method yourMethod. Create a class YourClass that implements this interface and displays the properties using the yourMethod. Instantiate a YourClass object and call the yourMethod.
*/
interface Vehicle {
  brand: string;
  model: string;
  startEngine(): void;
}

class Car implements Vehicle {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  startEngine(): void {
    console.log(`Ex7: ${this.brand} ${this.model} engine started.`);
  }
}

const myCar = new Car("Toyota", "Camry");
myCar.startEngine();


// Example 4 : Public, Private, and Readonly
class Item {
  public itemName: string;
  private itemId: number;
  readonly price: number;

  constructor(name: string, id: number, price: number) {
    this.itemName = name;
    this.itemId = id;
    this.price = price;
  }

  displayDetails(): void {
    console.log(`Ex4: Item ID: ${this.itemId}, Name: ${this.itemName}, Price: $${this.price}`);
  }
}

const item = new Item("Smartwatch", 123, 150);
item.itemName = "Desktop"; // Accessible: public property
// //item.itemId = 436;         // Error: Property 'productId' is private
// //item.price = 900;          // Error: Cannot assign to 'price' because it is a read-only property
item.displayDetails()