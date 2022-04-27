const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server working');
})

app.listen(port, () => {
    console.log('listening port', port);
})