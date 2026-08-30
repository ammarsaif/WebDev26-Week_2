// Sample students array
const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 21, grade: "B" },
  { name: "Eve", age: 19, grade: "A" },
];

// TODO: Implement the getStudentNames function
function getStudentNames(students) {
  // TODO: Use the map function to extract student names
  return students.map((student) => student.name);
}

// Test the getStudentNames function
const studentNames = getStudentNames(students);
console.log(studentNames);

// Output should be:
// [ 'Alice', 'Bob', 'Eve' ]

const clothes = [
  { type: "shirt", size: "M", color: "red" },
  { type: "pants", size: "L", color: "blue" },
  { type: "dress", size: "S", color: "red" },
];

// TODO: Implement the getRedClothes function
function getRedClothes(clothes) {
  // TODO: Use the filter function to get red clothing objects
  return clothes.filter((cloth) => cloth.color === "red");
}

// Test the getRedClothes function
const redClothes = getRedClothes(clothes);
console.log(redClothes);

// Output should be:
// [ { type: 'shirt', size: 'M', color: 'red' },
//   { type: 'dress', size: 'S', color: 'red' } ]
