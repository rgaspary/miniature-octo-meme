const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));
app.use('/', express.static('public'));

app.listen(port, () => console.log(`Express app listening on port ${port}!`));