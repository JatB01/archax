/* Write a TypeScript variable declaration for a variable `a` that
will guarantee that it is a property name or key of object `b` at
compile-time.*/

const b = {b: 2}
const a = new Map().set(b, 1)
console.log(a)