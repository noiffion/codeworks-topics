'use strict';

const express = require('express');
const app = express();
const PORT = 3030;
const router = require('./routers');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
