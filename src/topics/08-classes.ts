export class Person {
  // public name: string;
  // public address: string;

  // constructor(name: string, address: string){
  //   this.name = name;
  //   this.address = address;
  // }

  constructor(
    public name: string,
    public address: string = 'Who knows'
  ) {}
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ){
//     super(realName, 'Marruecos')
//   }
// }

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ){}
}

const person = new Person('Rafael','Marruecos')
const ironman = new Hero('Faliyo', 40, 'Rafael', person);

console.log(ironman)