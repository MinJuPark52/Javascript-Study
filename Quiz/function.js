const calculate = (command, a, b) => {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw Error(`Unknown command: ${command}`);
  }
};
