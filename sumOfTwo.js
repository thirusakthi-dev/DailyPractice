const addNumbers = (numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

console.log(addNumbers([1, 2, 7, 10]));

console.log("Node is running!");
