const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 8001;

app.use(cors());
app.get('/', (req, res) => {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '4',
      nickName: '공주님',
    },
    {
      name: '크롱이',
      age: '5',
      nickName: '장난꾸러기',
    },
  ];
  res.send(JSON.stringify(pororoObjArr));
});

app.listen(PORT, () => {
  console.log(`${PORT}번 실행`);
});
