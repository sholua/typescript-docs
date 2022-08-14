// Arguments type
const createPassword = (name: string, age: number) => `${name}/${age}`;

// Union type
const createPassword2 = (name: string, age: number | string) =>
  `${name}/${age}`;

// Default params
const createPassword3 = (name: string, age: number = 20): string =>
  `${name}/${age}`;

// Optional args
const createPassword4 = (name: string, age?: number): string =>
  `${name}/${age}`;

// Rest type
const withRest = (name: string, ...rest: Array<string>): void => {};

// Describe function type
let someFunc: (name: string) => string;
