const express = require('express');
const app = express();
const port = 3000;

app.use('/', require('./routes'));


app.listen(3000, () => {
  console.log(`trolling on port: ${port}`);
});