// Class with static property
class User5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.nickName = "shol";
    }
    getPass() {
        return `${this.name}/${User5.secret}`;
    }
}
User5.secret = 1234;
class John extends User5 {
    constructor(age) {
        super(name, age);
        this.name = "John";
    }
}
// Abstract class
class User6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        // console.log(this.name);
    }
}
class John2 extends User6 {
    constructor(age) {
        super(name, age);
        this.age = age;
        this.name = "john";
    }
    getPass() {
        return "Hello";
    }
}
