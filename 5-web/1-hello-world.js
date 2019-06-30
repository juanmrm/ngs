const http = require('http');

// req, res are streams!
const requestListener = (req, res) => {
  console.dir(req, { depth: 0 });
  console.dir(res, { depth: 0 });
  res.write('Hello World\n');
  res.end();
  // same as previous lines (shortcut)
  // res.end('Hello World\n');
};

const server = http.createServer(requestListener);
// Same as the previous sentence
// server.on('request', requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
