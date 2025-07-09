// 함수
// 재사용 가능하다는 장점

// 1. 함수 선언(function declaration)
// function name(parameter1, parameter2) { body... return; }
// 하나의 함수 === 한 가지 기능
// naming: 명사, 동사
// 함수는 객체의 일종이다.

// 2. 파라미터(parameter)
// premitive parameters: 값이 복사됨
// object parameters: 참조가 복사됨
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie); // { name: 'coder' }

// 3. 기본 매개변수(default parameters)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!"); // Hi! by unknown

// 4. 나머지 매개변수(rest parameters)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");
// dream
// coding
// ellie

// 5. 지역 스코프 (local scope)
/* 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다 */
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
}
printMessage();

// 6. return
function sum(a, b) {
  return a + b; // return value
}
const result = sum(1, 2);
console.log(`sum: ${result}`); // sum: 3

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // early return, 조건이 맞지 않으면 함수를 종료
  }
  // 조건이 맞을 때만 실행되는 로직
}

/* First-class function */
// 함수는 값으로 취급된다.
// 함수는 변수에 할당할 수 있고, 함수의 파라미터로 전달
// 함수의 반환값으로 사용할 수 있다.

// 1. 함수 표현식 (function expression)
// function declaration: 호이스팅 된다.
// function expression: 할당된 다음부터 호출 가능
const print = function () {
  // 함수에 이름이 없는 것. anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain(); // print
const sumAgain = sum;
console.log(sumAgain(1, 3)); // 4

// 2. 콜백(callback) 함수
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log("yes!");
};

// named function
// 함수 안에서 함수 자기자신을 호출 -> 콜백 함수
const printNo = function print() {
  console.log("no!");
  print();
};

randomQuiz("wrong", printYes, printNo); // no!
randomQuiz("love you", printYes, printNo); // yes!

// 3. 화살표 함수(arrow function)
const simplePrint2 = () => console.log("simplePrint2");

// 4. IIFE
// 선언함과 동시에 실행
(function hello() {
  console.log("IIFE");
})();
