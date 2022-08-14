// type User = {
//   id: string;
//   name: string;
// }

// type Message = {
//   id: string;
//   text: string;
// }

// class DataCollection<T extends { id: string }> {
//   constructor(public data: T[]) {}

//   search(id: string): T | null {
//     return this.data.find(item => item.id === id) || null;
//   }
// }

// const user: User = {
//   id: '1',
//   name: 'Alex',
// }

// ///////////////////////////

// function getValue<T extends object, U extends keyof T>(obj: T, prop: U) {
//   return obj[prop];
// }

// const r = getValue({ name: 'Alex'}, 'name');

// //////////////////////////

// const p = {
//   name: 'Alex',
//   age: 35
// }

// type P = typeof p;

// const user2: P = {
//   name: 'test',
//   age: 4
// }

// //////////////////

// function getKey<T extends object, U extends keyof T>(obj: T, value: T[U]): U | null {
//   const key = ( Object.keys(obj) as Array<U> ).find(item => obj[item] === value);

//   return key || null;
// }

// const key = getKey({ name: 'test'}, 'name');

// ///////////////////

// function patchField<T extends object, U extends keyof T, V extends T[U]>(obj: T, field: U, value: V) {

// }

// patchField({f: 1}, 'f', 5);

// ////////////////////

// function createTypeRange(a: number, b: number): number[] {
//   const arr: number[] = [...Array(10).keys()];
//   return arr;
// }

// type range = ReturnType<typeof createTypeRange> | 1 | 2 ;