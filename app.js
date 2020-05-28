const express = require('express');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const PORT = 3000;

app.listen(PORT, ()=> console.log(`server is running on ${PORT}`));
