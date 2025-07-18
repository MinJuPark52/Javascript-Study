//promise - 비동기를 간편하게 처리할 수 있도록 도와주는 객체

// promise - 자바스크립트 안에 내장되어있는 객체 (콜백 함수 대신 유용하게 사용)
// state(상태) : pending -> fulfilled or rejected
// producer 와 consumer

// 1. Producer
// 새로운 프로미스가 만들어질 때 excutor 함수가 자동으로 바로 실행됨
const promise = new Promise((resolve, reject) => {
  // (network, read files...) 비동기로 처리
  console.log("doing something");
  setTimeout(() => {
    // resolve("ellie");  성공적으로 호출
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    // 성공한 값
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 무조건 수행되는 값
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"));
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🍳"));
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log) // 🐓 => 🥚 => 🍳
  .catch(console.log);
