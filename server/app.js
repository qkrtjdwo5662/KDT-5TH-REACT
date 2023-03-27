const express = require('express');

const app = express();

const testRouter = require('./routes/test');

const PORT = 8001;

app.use('/api', testRouter);

app.listen(PORT, () => {
  console.log(`${PORT}번 실행`);
})