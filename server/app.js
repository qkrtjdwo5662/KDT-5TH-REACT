const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT } = process.env;
const app = express();

const testRouter = require('./routes/test');
const dataRouter = require('./routes/data');
const userRouter = require('./routes/user');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/test', testRouter);
app.use('/data', dataRouter);
app.use('/user', userRouter);
app.listen(PORT, () => {
  console.log(`${PORT}번 실행`);
});
