const filterEvenNumbers = (arr: number[]): number[] => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] as number) % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
};

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

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
interface BookStatus extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): BookStatus => {
  return { ...book, isRead: true };
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const arrMap = new Map();
  for (let i = 0; i < arr1.length; i++) {
    arrMap.set(arr1[i], arr1[i]);
  }
  const result = new Set();
  for (let i = 0; i < arr2.length; i++) {
    if (arrMap.has(arr2[i])) {
      result.add(arrMap.get(arr2[i]));
    }
  }
  return [...result] as number[];
};
