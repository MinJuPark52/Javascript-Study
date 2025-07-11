// 1. make a string out of an array
const fruits = ["apple", "banana", "orange"];
const result = fruits.join("/");
console.log(result);

// 2. make an array out of a string
const fruits = "🍎, 🥝, 🍌, 🍒";
const result = fruits.split(","); // 배열로
console.log(result);

// 3. make this array look like this: [5, 4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];
const result = array.reverse();
console.log(array);

// 4. make new array without the first two elements
const array = [1, 2, 3, 4, 5];
const result = array.slice(2, 5); // 배열의 특정 부분을 리턴
console.log(result);

// 5.
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 5-1. find a student with the score 90
/* find: 콜백함수를 만들어서 전달 */
const result = students.find((student) => student.score === 90);
console.log(result);

// 5-2. make an array of enrolled students
/* filter: 콜백함수를 전달해서 true인 데이터만 모아서 새로운 배열을 만듦 */
const result = students.filter((student) => student.enrolled);
console.log(result);

// 5-3. make an array containing only the students' scores result should be: [45, 80, 90, 66, 88]
/* map: 배열 안에 모든 요소를 콜백함수로 호출하면서 리턴되어진 값들로 만들어 주는 것 */
const result = students.map((student) => student.score);
console.log(result);

// 5-4. check if there is a student with the score lower than 50
/* some: 하나라도 리턴되는게 있는지 없는지 확인 */
const result1 = students.some((student) => student.score < 50);
console.log(result1);

/* every: 모든 요소들이 조건이 충족되어야지만 ture. */
const result2 = students.some((student) => student.score < 50);
console.log(result2);

// 5-5. compute students' average score
/* reduce: 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용 */
const result = students.reduce((prev, curr) => prev + curr.score, 0); // 0부터 시작해서 호출
console.log(result / students.length);

// 5-6. make a string containing all the scores result should be: '45, 80, 90, 66, 88'
const result = students.map((student) => student.score).join();
console.log(result);

// 5-7. do Q10 sorted in ascending order result should be: '45, 66, 80, 88, 90'
/* sort: 오름차순 정렬 */
const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
console.log(result);
