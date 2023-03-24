const express = require('express');

const app = express();

const testRouter = require('./routes/test');

const PORT = 4000;

app.use('/test', testRouter);

app.listen(PORT, () => {
  console.log(`${PORT}번 실행`);
})