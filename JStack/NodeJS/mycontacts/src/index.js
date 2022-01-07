const express = require('express');
require('express-async-errors');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);
// eslint-disable-next-line
app.use((error, request, response, next) => {
  console.log('ERROR HANDLER ##############################');
  console.log(error);
  response.sendStatus(500);
});

app.listen(8080, () => console.log('Server started at http://localhost:8080'));
