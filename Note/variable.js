"use strict";

// 2. 변수 rw(read/write)
/* let */
// 블록 스코프 - 변수 안에서 선언된 변수는 해당 블록 안에서만 유효
{
  let name = "elie";
  console.log(name);
  name = "hello";
  console.log(name);
}
// 글로벌 스코프 - 어느 곳에서든 접근 가능
let globalName = "global name";

/* var */
// var 호이스팅 - 어디에 선언했는지에 상관없이 항상 최상단으로 끌어올려지는 것
// 블록 스코프 없음
age = 4;
var age;
console.log(age);

/* const r(read only) */
// 값을 할당하면 변경되지 않는 상수
// 장점 - 1. 보안 방지  2. 스레드 안전  3. 실수 감소
const datsInweek = 7;
const maxNumber = 5;

/* 데이터 타입 */
// 1. 원시 타입(primitive) - 더 이상 작은 단위로 나눌 수 없는 값
// - 숫자, 문자열, 불리언, null, undefined, 심볼
// 2. 객체 타입(object) - 여러 값을 묶어서 하나의 값으로 표현
// - 객체, 배열, 함수

/* 동적 타이핑 */
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value:: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value:: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value:: ${text}, type: ${typeof text}`); // 문자열
text = "8" / "2";
console.log(`value:: ${text}, type: ${typeof text}`); // 숫자
