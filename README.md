# ARCHAX INTERVIEW ANSWERS


1.	This is false because Objects, arrays and dates are non-primitive types, so they are compared by their reference. This means their location in memory. Primitive types on the other hand (string, numbers) are compared by their value using the equality operator ( == / ===). 

    `{ a: 1 } === { a: 1 }` is therefore false because 2 separate objects are declared in memory, with different locations.

        const obj = { a: 1 }
        obj === obj  //true

    The above would be true since we are comparing one declared object in memory, and since only one object is declared and we are checking it against itself, it would be true because the location is the same in memory.

2.	For asynchronous code, forEach and for await work differently at run time. Async/await is syntactic sugar for javascript promises. The `foreach` function foes not wait for promises to resolve, so it will execute all iterations without having the promise results, which will usually result in unintended errors further down the line (you usually need the asynchronous results before proceeding with the rest of the application code).

    Using `for await ( const a of [ p1, p2, p3 ] )` waits for the promises to resolve before iterating over each of the results.

3.	Objects and Maps are similar, as in both contain key/value pairs. The key difference is that Objects only support string as key values. However, a Map lets you use any type as a key.

    To declare Object key values you can do object.key = value. For Maps we use map.set(key, value)

    Maps have certain benefits, they keep the insertion order, they have useful helper functions (map.has(key), map.size and map.foreach) and provide a more efficient way to structure our data.

    We would only use maps where we have more complex data structures, and use objects for simpler data structures where there is less object manipulation, and strings are fine for keys.

4.	If we have our own custom library in the node_modules folders which has the same name as a published npm package, we can simply use npm update <package_name> to replace the dependencies in our project.

5.	See buffer.js or run `npm run buffer`

6.	See buffer.js or run `npm run buffer`

7.	See dates.js or run `npm run dates`

8.	See object-keys.js or `npm run object-keys'. Not overly familiar with Typescript so did this in JS.

9.	Not overly familiar with Typescript.

10.	See jest.js or run `npm run mock` I had trouble loading the jest library even though I followed instructions here: https://jestjs.io/docs/es6-class-mocks, the error  is in relation to ES6 module imports, though I enabled this in the package.json
