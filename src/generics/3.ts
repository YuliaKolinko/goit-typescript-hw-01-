// Merging two objects with different types using generics
// type ObjectA = {
//   name: string | null;
// };
// type ObjectB = {
//   id: string | number;
// };
// type MergedObject = ObjectA & ObjectB;

// function merge(objA: ObjectA, objB: ObjectB): MergedObject {
//   return Object.assign({}, objA, objB);
// }

// Merging two objects with different types using generics
function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}
