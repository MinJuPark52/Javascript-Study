// Array 🎉

// 1. 선언(Declaration)
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index Position
const fruits = ["🍎", "🍌"];
console.log(fruits); // ["🍎", "🍌"]
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎 배열의 첫번째 아이템 찾기
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 배열의 마지막의 아이템 찾기

// 3. lopping over an array
// a. for
for (let i = 0; i < fruuits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (const fruuits of fruits) {
  console.log(fruuits); // 🍎 🍌
}

// c. forEach
// forEach는 배열안에 들어있는 value들 마다 내가 전달한 함수를 출력
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: 아이템을 제일 뒤에 넣기
fruits.push("🍓", "🍑"); // ["🍎", "🍌", "🍓", "🍑"]

// pop: 제일 뒤에서 부터 지우기
fruits.pop(); // ["🍎", "🍌", "🍓"]

// unshift: 앞에서 데이터 넣기
fruits.unshift("🍇"); // ["🍇", "🍎", "🍌", "🍓"]

// shift: 앞에서 데이터 지우기
fruits.shift(); // ["🍎", "🍌", "🍓"]

/* shift, unshift는 pop, push보다 느리다. */
// splice: 특정한 위치에서 지우기
fruits.push("🍓", "🍑", "🍋");
fruits.splice(1, 1); // deleteCount 적지 않으면 뒤에 다 지워짐
fruits.splice(1, 1, "🍏", "🍉"); // 지워진 자리에 지정한 데이터 들어감

// 두개의 배열 결합(combine two arrays)
// concat을 호출하는 배열 + 새로운 전달된 아이템 배열 = 새로운 배열 리턴
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);

// 5. 검사(Searching)
// 인덱스 찾기
// indexOf
console.log(fruits.indexOf("🍎")); // 0

// includes
console.log(fruits.includes("🍉")); // true

// lastIndexOf
// 마지막의 인덱스 출력
fruits.push("🍎"); // ["🍎","🍏","🍉","🍑","🍋","🍎"]
console.log(fruits.indexOf("🍎")); // 0
console.log(fruits.lastIndexOf("🍎")); // 5
