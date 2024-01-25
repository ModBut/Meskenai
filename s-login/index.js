const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'forest',
})
app.use(cors());
const app = express();
const port = 3001;

app.use(express.static('public'));
app.use(bodyParser.json());

connection.connect();


app.get('/', (req, res) => {
  console.log('Buvo užklausta /');
  res.send('Labas Bebrai!');
});



app.listen(port, () => {
  console.log(`FOREST SERVERIS klauso ${port} porto.`);
});