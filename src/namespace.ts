// Export data from namespace
namespace Utils {
  const PI: number = 3.14;
  const name: string = "Shol";

  export const getPass = (name: string, age: number): string => `test`;
}

const myPass = Utils.getPass("shol", 34);
const PI = 3;
