var Functions;
(function (Functions) {
    // Arguments type
    const createPassword = (name, age) => `${name}/${age}`;
    // Union type
    const createPassword2 = (name, age) => `${name}/${age}`;
    // Default params
    const createPassword3 = (name, age = 20) => `${name}/${age}`;
    // Optional args
    const createPassword4 = (name, age) => `${name}/${age}`;
    // Rest type
    const withRest = (name, ...rest) => { };
    // Describe function type
    let someFunc;
})(Functions || (Functions = {}));
