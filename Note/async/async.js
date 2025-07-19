// 기존에 존재하는거 위에 간단하게 api 제공
// async & await

// 1. async - 자동으로 코드 블록이 프로미스로 변환됨
async function fetchUser() {
  return "ellie";
}

const user = fetchUser();
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  const applePromise = getApple(); // await 병렬적으로 실행
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs - 이거 사용하면 병렬적으로 사용안해도 됨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]) // all: promise 배열을 전달하면 병렬적으로 다 받을 때까지 모아 줌
    .then((fruits) => fruits.join(" + "));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]); // race: 배열의 전달된 프로미스 중에서 가장 먼저 값을 리턴하는 값만 전달됨
}

pickOnlyOne().then(console.log);
