const express = require('express');
const authenticationRouter = require('./Routes/authentication');
const crud = require('./Routes/crud');
const metaToken = require('./Routes/metaToken');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use(authenticationRouter);
app.use(crud);
app.use(metaToken);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
