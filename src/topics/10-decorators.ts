function classDecorator<T extends { new (...args:any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "override";
  }

}

@classDecorator
export class SuperClass {
  public myProperty: String = "abc123";

  print() {
    console.log("Hola mundoooo");
  }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
