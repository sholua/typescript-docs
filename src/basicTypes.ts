namespace BasicTypes {
  // Boolean type
  let isCompleted: boolean = false;
  isCompleted = true;

  // Number type
  let decimal: number = 5;

  // String type
  let name: string = "Alex";

  // undefined & null
  let u: undefined = undefined;
  let n: null = null; // not object like in JS

  // Void
  const greatUser = (): void => {
    console.log("hello");
  };

  // Array type
  const arr1: number[] = [];
  const arr2: Array<number> = [];

  // Typle type
  let x: [number, string] = [10, "test"];

  // Any type
  let x1: Array<any> = [10, "test"];

  // Enum type
  enum Directions {
    Up,
    Down,
  }

  Directions.Up; // 0
  Directions.Down; // 1

  enum Directions2 {
    Up = 3,
    Down = 4,
  }

  Directions2.Up; // 3
  Directions2.Down; // 4

  // Never type
  // Function throws error
  const error = (message: string): never => {
    throw new Error(message);
  };

  // Function infinite loop
  const infiniteLoop = (): never => {
    while (true) {}
  };

  // Object type
  const create = (o: object | null): void => {};

  // Multiple types for one value
  const example: null | number = null;

  // Type
  type Name = string; // alias
}
