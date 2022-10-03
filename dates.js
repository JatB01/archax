/*Write a function that will employ a divide-and-conquer algorithm
that will sort an array of objects by their `dateHired` (native JS
`Date` object) property in descending order. All items in the array
will be an object which has a `dateHired` property which is a valid
`Date` object. You cannot use built-in array sorting methods and
3rd-party libraries, but manipulating the `dateHired` property with
built-in Node.js/ES6+ functions is allowed.*/

const dateArray = [
  { dateHired: new Date('1 Jan 2020') },
  { dateHired: new Date('1 Jan 2021') },
  { dateHired: new Date('1 Jan 2022') },
]

const sortDates = (array) => {
  let done = false
  //while loop to continuously sort array until done
  while (!done) {
    done = true
    for (let i = 1; i < array.length; i++ ) {
      if (array[i - 1].dateHired.getTime() < array[i].dateHired.getTime()) {
        //if 2 elements found to be unordered then set done to false and loop iteration
        done = false
        //create a temp variable for previous element
        const tmp = array[i - 1]
        //previous position now becomes current element
        array[i - 1] = array[i]
        //current position now becomes previous element
        array[i] = tmp
      }
    }
  }
}

sortDates(dateArray)
console.log(dateArray)