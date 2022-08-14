// Define object type
let user: { name: string; age: number } = {
  name: "Alex",
  age: 30,
};

// user = "test";

// Using Type for object structure
type Person = { name: string; age: number; nickName: string };

let user2: Person = {
  name: "Alex",
  age: 30,
  nickName: "shol",
};

let user3: Person = {
  name: "Alex",
  age: 20,
  nickName: "test",
};

// Two objects with almost the same structure
type Person2 = {
  name: string;
  age: number;
  nickName?: string;
  getPass?(): string;
};
