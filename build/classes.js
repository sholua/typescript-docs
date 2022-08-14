// Class types
class User {
    constructor(name, age, nickName) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}
// Class default properties
class User2 {
    constructor(nickName) {
        this.name = "Alex";
        this.age = 20;
        this.nickName = nickName;
    }
}
// Minimization of Class properties
class User3 {
    constructor(name, age, nickName) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}
// Get access to private property
class User4 {
    constructor(name) {
        this.name = name;
        this.age = 20;
    }
    setAge(age) {
        this.age = age;
    }
    set myAge(age) {
        this.age = age;
    }
}
const alex = new User4("Alex");
alex.myAge = 45;
alex.setAge(35);
