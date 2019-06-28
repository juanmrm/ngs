const printHelloWorldForever = delay => {
  setTimeout(() => {
    console.log(`Hello World. ${delay}`);
    printHelloWorldForever(++delay);
  }, delay * 1000);
};

printHelloWorldForever(1);
