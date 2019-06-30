# Module

A module is a file or a folder containing code files

## What will this log on top level of a node file?

  console.log(arguments);

Node internally wraps every file that executes inside a function and pass it the following   arguments (exports, module, require, __filename, __dirname).
This are not global objects.

This does not happen in Browsers. In browsers this wrapping function does not exist.

exports or module.exports: to define the api of a module (exports is an alias of module.exports)
require: to require other modules
__filename: path to the file
__dirname: path to the folder

Also this wrapping function will return by default:
  
  return module.exports;

## How to define a global value in Node

  This should be avoided. Global values are really bad because we make our code dependent of the gloabl state.

  "global" is the equivalent to the "window" object in Browser

  Inspect what global has inside:
    "console.log(global);
    "console.dir(global, { depth: 0 });" // Because global is a big object, we're only printing her root level.

## The Event Loop

Is what Node uses to process asynchronous actions and interface them for you so that you don't have to deal with threads. It's an infinite loop.

Every node process starts this infinite loop and will continue running it while there are asynchronous operations pending. If there are not, it will exit and the OS will terminate the process.

## Event Emitter

This built-in library is core concept of the Node framework

const EventEmitter = require('events');

myEmmiter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});

myEmmiter.emit('TEST_EVENT');
