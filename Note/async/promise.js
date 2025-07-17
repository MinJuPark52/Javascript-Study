//promise - 비동기를 간편하게 처리할 수 있도록 도와주는 객체

// promise - 자바스크립트 안에 내장되어있는 객체 (콜백 함수 대신 유용하게 사용)
// state(상태) : pending -> fulfilled or rejected
// producer 와 consumer

// 1. producer
const promise = new Promise((resolve, reject) => {});
