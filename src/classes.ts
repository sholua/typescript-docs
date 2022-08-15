namespace Classes {
  // Class types
  class User {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
      this.name = name;
      this.age = age;
      this.nickName = nickName;
    }
  }

  // Class default properties
  class User2 {
    name: string = "Alex";
    age: number = 20;
    nickName: string;

    constructor(nickName: string) {
      this.nickName = nickName;
    }
  }

  // Minimization of Class properties
  class User3 {
    constructor(
      public name: string,
      public age: number,
      public nickName: string
    ) {}
  }

  // Get access to private property
  class User4 {
    private age: number = 20;

    constructor(public name: string) {}

    setAge(age: number) {
      this.age = age;
    }

    set myAge(age: number) {
      this.age = age;
    }
  }

  const alex = new User4("Alex");
  alex.myAge = 45;
  alex.setAge(35);
}
