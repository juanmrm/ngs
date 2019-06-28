# Getting Started

## REPL

- Read, Eval, Print, Loop
- Print will display undefined for statements, does not have any output
- CTRL + L: clears the output
- .help to see useful commands (.editor, .break, .exit...)
- Tab key and Tab + Tab key to see all available methods, keywords...
- _ variable stores the latest value we've printed

Start a live session with "node".

To see all options use "node -h | less": see env variables that we can pass, debug options etc... 

## require keyword

Use to manage the dependencies. Use it to require a library (built-in module or third-party)

## Timers

NodeJS has an API with this functions very close to what we see in browser (maybe s)

- setTimeout(function, delay in ms, arg1, arg2, ...argN): execute the function after a minimun delay
- setImmediate(function): is like a setTimeout with 0 ms. (Not available in all browser)
- setInterval(function, interval in ms, arg1, arg2, ...arg)
- clearTimeout(id): cancel the timer
- clearInterval(id): cancel an interval
- clearImmediate(id): cancel the timer

## process object

- Handy bridge between node and os, we can use it to pass to node dinamic configuration and more things:
  
  - process.env.VAR_NAME
  - process.argv: first item is the name of the command, second the name of the script, and third are the arguments we pass
  - process.exit: manually terminate the process

