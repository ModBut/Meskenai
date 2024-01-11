const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const app = express();
const port = 3001;


app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/account', (req, res) => {
const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
res.json(data);
});

app.post('/account', (req, res) => {
const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
const newAccount = req.body;
newAccount.id = uuidv4();
data.push(newAccount);
fs.writeFileSync('./data/data.json', JSON.stringify(data));
res.json({id: newAccount.id});
});

app.delete('/account/:id', (req, res) => {
let data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
const id = req.params.id;
data = data.filter(accounts => accounts.id !== id);
fs.writeFileSync('./data/data.json', JSON.stringify(data));
res.json({status: 'ok'});
});


app.listen(port, () => {
  console.log(`Meskenai klauso ${port} porto.`);
});