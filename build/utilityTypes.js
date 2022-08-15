var utilityTypes;
(function (utilityTypes) {
    const user = {
        name: "shol", // we cannot change this property
    };
    const a = { name: "test" };
    const b = { name: "test", age: 4 };
    const x = {
        home: { title: "tes" },
        about: { title: "about" },
        contacts: { title: "contacts" },
    };
    const todo = {
        title: "Clean room",
        completed: false,
    };
    const todoForPreview = {
        title: "Pass PDP",
        completed: false,
    };
    // Exclude<T, U>
    const excluded = 3;
    // Extract<T, U>
    const extracted = 4;
    // NotNullable<T>
    const withoutNullable = "hello";
})(utilityTypes || (utilityTypes = {}));
