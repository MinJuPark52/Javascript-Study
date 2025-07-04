// 1. 문자열 순차(string concatenation)
console.log("my" + "cat"); // mycat
cosnele.log("1" + 2); // 12
console.log(`string literals: '''' 1 + 2 = ${1 + 2}`); // string literals: '''' 1 + 2 = 3

// 2. 산술 연산자(numeric operatiors)
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(5 % 2);
console.log(2 ** 3);

// 3. 증감 연산자(increment and decrement operators)
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 3, counter: 3

// 4. 할당 연산자(assignment operators)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. 비교 연산자(comparison operators)
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. 논리 연산자(logical operators) || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;

// or - 값이 하나라도 true면 true
// && - 값이 모두 true면 true
// !(not) - boolean 값을 반대로 뒤집음

console.log(`or: ${value1 || value2 || check()}`); // true

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("😱");
  }
  return true;
}

// 7.동등 연산자(equality operators)
const stringFive = "5";
const numberFive = 5;

// == 타입을 비교하지 않고 값만 비교
// === 타입과 값을 모두 비교

// 8. 조건 연산자(conditional operators) - if
// if, else if, else

// 9. 삼항 연산자(ternary operator)
// 조건 ? true : false

// 10. switch 문(switch statement)
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go to IE");
    break;
  case "Chrome":
    console.log("go to Chrome");
    break;
  case "Firefox":
    console.log("go to Firefox");
    break;
  default:
    console.log("go to another browser");
}

// 11. 반복문(loops) - false가 나올 때까지 반복 (조건이 맞을 때만 블록 실행하고 싶을 때)
// while
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while - 블록을 실행 후 조건을 검사 (블록을 먼저 실행하고 싶을 때)
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for - false가 나올 때까지 반복
// 초기식, 조건식, 증감식
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
