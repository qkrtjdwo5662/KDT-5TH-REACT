const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.send('/test 접근 성공');
})

module.exports = router