'use strict'

let server = require('./server');
let PORT = 3000;

server.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`);
})