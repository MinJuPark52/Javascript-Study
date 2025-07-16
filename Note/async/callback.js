// 자바스크립트는 동기적이다
// 호이스팅이 된 이후부터 동기적으로 실행된다

// async 비동기적인 실행 방법
console.log("1");
setTimeout(() => console.log(2), 1000); // 브라우저에게 먼저 요청 -> 1초 후 콜백함수 실행
console.log(3); // 1 3 2

/* 콜백 */
// synchronous 동기 콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello")); // 1 3 hello 2

// asyncronous 비동기 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // 1 3 hello 2 async callback

/* 콜백 지옥 */
class USerStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
UserStorage.loginUser(
  id,
  password,
  (user) => {
    UserStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `hello ${userWithRole.name}, your have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
