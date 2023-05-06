'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
const app = express();
app.get('/user/:id', function (req, res) {
    res.send('user ' + req.params.id)
  })

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
 