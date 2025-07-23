const swapVariables = (first, second) => {
  let temp = first;
  first = second;
  second = temp;

  console.log(`First Value: ${first}, Second Value: ${second}`);
};

swapVariables("we", "jisk");
