// class - 템플릿, 데이터 없음
// object - 데이터 있음

// 1. class 선언
class Person {
  // constructor: 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // method: 클래스 안에 정의된 함수
  speck() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name); // ellie
console.log(ellie.age); // 20
ellie.speck(); // ellie: hello!

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age); // -1

// 3. 필드 fields (public, private)
class Experiment {
  publicField = 2; // public
  #privateField = 0; // private - 클래스 내부에서 접근, 변경 가능
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // 0

// 4. 정적 메소드 (static properties and method)
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
// static 함수 호출할 때 클래스 이름으로 호출
console.log(Aarticle.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// 5. 상속 (Inheritance)
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of}`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// 연장한다는 의미로 extends 키워드 사용
// Rectangle 클래스는 Shape 클래스를 상속받는다.
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    // 오버라이드: 부모 클래스의 메소드를 재정의
    super.draw(); // 부모 클래스의 메소드를 호출
    console.log(`*`);
  }
  getArea() {
    return (this.width * this.height) / 2; // 삼각형의 면적 계산
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); // drawing blue color of
const triangle = new Triangle(20, 20, "red");
triangle.draw(); // drawing red color of

// 6. instanceof
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true - 모든 클래스는 Object를 상속
