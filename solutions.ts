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


type StringOrNumber = string | number;

const checkType = (param: StringOrNumber): string => {
  if (typeof param === "string") {
    return "String";
  } else {
    return "Number";
  }

};


const getProperty  = <T, K extends keyof T>(obj:T, key: K): T[K] => {
  return obj[key]
}


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
