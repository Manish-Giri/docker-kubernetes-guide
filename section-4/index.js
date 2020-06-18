const express = require('express');
const app = express();
const PORT = 8080;

app.get('/hello', (req, res) => {
    res.send('<h1 style="color: brown">Hello World</h1>');
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
