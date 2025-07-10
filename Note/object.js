// 객체(Object)
// 변수 하나 당 하나의 값을 담을 수 있다.
// object = { key: value }의 집합체이다.

// 1. 리터럴과 속성(literals and properties)
const obj1 = {}; // 객체 리터럴
const obj2 = new Object(); // 객체 생성자

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// 2. 계산된 속성(computed properties)
// key는 문자열로 이루어져 있다.
console.log(ellie.name);
console.log(ellie["name"]); // 정확하게 값을 모를 때

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");

// 3. property value shorthand
// 반복해서 작성해야하는 문제점이 발생
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30);
console.log(person4);

// 4. 생성자 함수(constructor function)
// 함수 이용해서 값만 전달 -> 생성자 이용해서 호출
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 5. in operator
// 객체에 특정 속성이 있는지 확인
console.log("name" in ellie); // true
console.log("age" in ellie); // true
console.log("random" in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
// 객체의 속성들을 순회할 때 사용
for (const key in ellie) {
  console.log(key); // name, age
}

// for (value of iterable)
// 배열이나 문자열과 같은 순차적으로 순회할 때 사용
const array = [1, 2, 3, 4, 5];
for (const value of array) {
  console.log(value); // 1, 2, 3, 4, 5
}

// 7. cloning
const user = { name: "ellie", age: "20" };
const user2 = user; // 동일한 reference를 가리킴
user2.name = "coder";
console.log(user); // { name: 'coder', age: '20' }

// old way
const user3 = {};
for (const key in user) {
  user3[key] = user[key];
}
console.log(user3); // { name: 'ellie', age: '20' }

// Object.assign
// object.assign(dest, [obj1, obj2, obj3])
// 복사하고자 하는 타켓을 첫번째 인자로 넣고,
// 복사하고자 하는 객체들을 두번째 인자부터 넣는다.
const user4 = Object.assign({}, user);
console.log(user4); // { name: 'ellie', age: '20' }

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
