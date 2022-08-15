namespace Interface {
  /////////////// Readonly properties
  interface User7 {
    readonly name: string;
    age?: number;
  }

  const user7: User7 = {
    name: "Alex",
  };

  /////////////// Interface extension
  interface User8 {
    name: string;
    age: number;
    [propName: string]: any;
  }

  const user8: User8 = {
    name: "test",
    age: 25,
    address: "test",
  };

  //////////////// Class Interface
  interface User9 {
    name: string;
    age: number;
  }

  interface Pass {
    getPass(): string;
  }

  class Alex implements User9, Pass {
    name = "Alex";
    age = 25;
    getPass = function () {
      return "test";
    };
    additionalProp = "test";
  }

  //////////////// Interface ixtends
  interface User10 {
    name: string;
    age: number;
  }

  interface Admin extends User10 {
    getPass(): string;
  }

  class Owner implements Admin {
    name = "Alex";
    age = 35;
    getPass() {
      return `${this.name} is ${this.age} years old`;
    }
  }
}
