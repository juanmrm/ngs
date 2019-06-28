const greetingNtimesWithDelay = (times, delay) => {
  let counter = times;
  const intervalId = setInterval(() => {    
    console.log(`Hello World. ${delay}`);
    if (--counter === 0) {
      clearInterval(intervalId);
      greetingNtimesWithDelay(times, 100 + delay);
    }
  }, delay);
};

greetingNtimesWithDelay(5, 100);
