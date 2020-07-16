'use strict';

const express = require('express');
const app = express();
const PORT = 3030;
const router = require('./router');

app.use(router);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
