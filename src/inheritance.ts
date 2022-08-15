namespace Inheritance {
  // Class with static property
  class User {
    static secret = 1234;
    private nickName: string = "shol";

    constructor(public name: string, public age: number) {}

    getPass(): string {
      return `${this.name}/${User.secret}`;
    }
  }

  class John extends User {
    name: string = "John";

    constructor(age: number) {
      super(John.name, age);
    }
  }

  // Abstract class
  abstract class User2 {
    constructor(public name: string, public age: number) {}

    greet(): void {
      // console.log(this.name);
    }

    abstract getPass(): string;
  }

  class John2 extends User2 {
    name: string = "john";

    constructor(public age: number) {
      super(John2.name, age);
    }

    getPass(): string {
      return "Hello";
    }
  }
}
