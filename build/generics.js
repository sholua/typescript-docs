var Generics;
(function (Generics) {
    class DataCollection {
        constructor(data) {
            this.data = data;
        }
        search(id) {
            return this.data.find((item) => item.id === id) || null;
        }
    }
    const user = {
        id: "1",
        name: "Alex",
    };
    ///////////////////////////
    function getValue(obj, prop) {
        return obj[prop];
    }
    const r = getValue({ name: "Alex" }, "name");
    //////////////////////////
    const p = {
        name: "Alex",
        age: 35,
    };
    const user2 = {
        name: "test",
        age: 4,
    };
    //////////////////
    function getKey(obj, value) {
        const key = Object.keys(obj).find((item) => obj[item] === value);
        return key || null;
    }
    const key = getKey({ name: "test" }, "name");
    ///////////////////
    function patchField(obj, field, value) { }
    patchField({ f: 1 }, "f", 5);
    ////////////////////
    function createTypeRange(a, b) {
        const arr = [...Array(10).keys()];
        return arr;
    }
    // Class with generic types
    class User13 {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getPass() {
            return "Hello";
        }
        getSecret() {
            return this.age ** 2;
        }
    }
})(Generics || (Generics = {}));
