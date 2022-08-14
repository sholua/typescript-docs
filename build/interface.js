// /////////////// Readonly properties
// interface User {
//     readonly name: string;
//     age?: number;
// }
// const user: User = {
//     name: "Alex",
// }
// user.name = 'test';
// /////////////// Interface extension
// interface User {
//     name: string;
//     age: number;
//     [propName: string]: any;
// }
// const user: User = {
//     name: 'test',
//     age: 25,
//     address: 'test',
// }
// //////////////// Class Interface
// interface User {
//     name: string;
//     age: number;
// }
// interface Pass {
//     getPass(): string;
// }
// class Alex implements User, Pass {
//     name = 'Alex';
//     age = 25;
//     getPass = function () {
//         return 'test';
//     }
//     additionalProp = 'test';
// }
// //////////////// Interface ixtends
// interface User {
//     name: string;
//     age: number;
// }
// interface Admin extends User {
//     getPass(): string;
// }
// class Owner implements Admin {
//     name = 'Alex';
//     age = 35;
//     getPass() {
//         return `${this.name} is ${this.age} years old`;
//     }
// }
