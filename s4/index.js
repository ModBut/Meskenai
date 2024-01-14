const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/accounts', (req, res) => {
const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
res.json(data);
});


app.listen(port, () => {
  console.log(`Bebrai klauso ${port} porto.`);
});