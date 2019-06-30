const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmmiter = new EventEmitter();

setImmediate(() => {
  myEmmiter.emit('TEST_EVENT');
})

myEmmiter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});

myEmmiter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});

myEmmiter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});


