// Class with static property
class User5 {
  static secret = 1234;
  private nickName: string = "shol";

  constructor(public name: string, public age: number) {}

  getPass(): string {
    return `${this.name}/${User5.secret}`;
  }
}

class John extends User5 {
  name: string = "John";

  constructor(age: number) {
    super(name, age);
  }
}

// Abstract class
abstract class User6 {
  constructor(public name: string, public age: number) {}

  greet(): void {
    // console.log(this.name);
  }

  abstract getPass(): string;
}

class John2 extends User6 {
  name: string = "john";

  constructor(public age: number) {
    super(name, age);
  }

  getPass(): string {
    return "Hello";
  }
}
