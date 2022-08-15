var Inheritance;
(function (Inheritance) {
    // Class with static property
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.nickName = "shol";
        }
        getPass() {
            return `${this.name}/${User.secret}`;
        }
    }
    User.secret = 1234;
    class John extends User {
        constructor(age) {
            super(John.name, age);
            this.name = "John";
        }
    }
    // Abstract class
    class User2 {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            // console.log(this.name);
        }
    }
    class John2 extends User2 {
        constructor(age) {
            super(John2.name, age);
            this.age = age;
            this.name = "john";
        }
        getPass() {
            return "Hello";
        }
    }
})(Inheritance || (Inheritance = {}));
