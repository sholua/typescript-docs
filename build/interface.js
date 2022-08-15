var Interface;
(function (Interface) {
    const user7 = {
        name: "Alex",
    };
    const user8 = {
        name: "test",
        age: 25,
        address: "test",
    };
    class Alex {
        constructor() {
            this.name = "Alex";
            this.age = 25;
            this.getPass = function () {
                return "test";
            };
            this.additionalProp = "test";
        }
    }
    class Owner {
        constructor() {
            this.name = "Alex";
            this.age = 35;
        }
        getPass() {
            return `${this.name} is ${this.age} years old`;
        }
    }
})(Interface || (Interface = {}));
