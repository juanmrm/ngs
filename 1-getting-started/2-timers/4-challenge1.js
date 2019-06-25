const theOneFunc = delay => {
  console.log(`Hello after ${delay} seconds`);
};

// You can define only ONE function

// Hello after 4 seconds
setTimeout(theOneFunc, 4 * 1000, 4);

// Hello after 8 seconds
setTimeout(theOneFunc, 8 * 1000, 8);
