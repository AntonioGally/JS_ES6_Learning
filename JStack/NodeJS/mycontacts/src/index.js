const express = require('express')

const app = express();

app.get('/', (request, response) => {
    response.send('Oi bubu');
});

app.listen(8080, () => console.log('Server started at http://localhost:8080'));