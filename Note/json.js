// JSON

// 1. Object -> JSON
// stringify(obj)
// let json = JSON.stringify(true);
// console.log(json); // true

// let json = JSON.stringify(["apple", "banana"]); // 배열처럼 보이게 표기
// console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori", "color":' "white", "size": null, "birthDate": "2020-05-29T13:20:22.670Z"}

// 해당하는 프로퍼티만 json으로 변환
json = JSON.stringify(rabbit, ["name"]);
console.log(json); // {"name":'tori'}

// 세밀하게 통제 -> callback 함수 사용
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value:${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json); // {"name":'ellie', "color":' "white", "size": null, "birthDate":"2020-05-29T13:20:22.670Z"}

// 2. JSON -> Object
// parse(json);
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value:${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj); // {name: "tori", color: "white", size: null, birthDate: "2020-05-29T13:20:22.670Z"}
rabbit.jump();
obj.jump(); // 타입에러 = rabbit obj를 json으로 변환할 때 함수 포함 X -> json을 다른 obj로 변환하면 함수 포함이 안되어있기 때문에 jump 기능이 없음

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // obj 수정 전, 타입에러 = json의 데이터 자체의 string이 obj에 할당되었기 때문
console.log(obj.birthDate.getDate()); // 29
