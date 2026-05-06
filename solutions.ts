const filterEvenNumbers = (arr: number[]): number[] => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] as number) % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
};

// filterEvenNumbers([1, 2, 3, 4, 5, 6, -1]);

const reverseString = (str: string): string => {
  const strArr = str.split("");
  return strArr.reverse().join("");
};

// reverseString("typescript");

// Problem 3:
// Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

type StringOrNumber = string | number;

const checkType = (param: StringOrNumber): string => {
  if (typeof param === "string") {
    return "String";
  } else {
    return "Number";
  }

};


// Problem 4:
// Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

// // Sample Input:
// const user = { id: 1, name: "John Doe", age: 21 };
// getProperty(user, "name");

// // Sample Output:
// "John Doe";
// Problem 5:
// Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

// // Sample Input:
// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// toggleReadStatus(myBook);

// // Sample Output:
// {
//   title: "TypeScript Guide",
//   author: "Jane Doe",
//   publishedYear: 2024,
//   isRead: true
// }
// Problem 6:
// Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

// // Sample Input:
// const student = new Student("Alice", 20, "A");
// student.getDetails();

// // Sample Output:
// "Name: Alice, Age: 20, Grade: A";
// Problem 7:
// Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

// // Sample Input:
// getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

// // Sample Output:
// [3, 4, 5]
