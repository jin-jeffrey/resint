const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/', (req,res) => {
    res.send('test');
})

app.listen(process.env.PORT, () =>
    console.log(`Resint backend listening on ${process.env.PORT}`),
);