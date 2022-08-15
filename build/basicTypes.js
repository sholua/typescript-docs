var BasicTypes;
(function (BasicTypes) {
    // Boolean type
    let isCompleted = false;
    isCompleted = true;
    // Number type
    let decimal = 5;
    // String type
    let name = "Alex";
    // undefined & null
    let u = undefined;
    let n = null; // not object like in JS
    // Void
    const greatUser = () => {
        //   console.log("hello");
    };
    // Array type
    const arr1 = [];
    const arr2 = [];
    // Typle type
    let x = [10, "test"];
    // Any type
    let x1 = [10, "test"];
    // Enum type
    let Directions;
    (function (Directions) {
        Directions[Directions["Up"] = 0] = "Up";
        Directions[Directions["Down"] = 1] = "Down";
    })(Directions || (Directions = {}));
    Directions.Up; // 0
    Directions.Down; // 1
    let Directions2;
    (function (Directions2) {
        Directions2[Directions2["Up"] = 3] = "Up";
        Directions2[Directions2["Down"] = 4] = "Down";
    })(Directions2 || (Directions2 = {}));
    Directions2.Up; // 3
    Directions2.Down; // 4
    // Never type
    // Function throws error
    const error = (message) => {
        throw new Error(message);
    };
    // Function infinite loop
    const infiniteLoop = () => {
        while (true) { }
    };
    // Object type
    const create = (o) => { };
    // Multiple types for one value
    const example = null;
})(BasicTypes || (BasicTypes = {}));
