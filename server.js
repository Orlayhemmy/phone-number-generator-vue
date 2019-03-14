const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const phoneNumbers = require('./phoneNumbers.json');

const app = express();

const fetchGeneratedNumbers = (req, res) => {
  return res.status(200).send({
    message: 'Success',
    data: phoneNumbers,
  });
};

const storeGeneratedNumbers = (req, res) => {
  const date = new Date().toLocaleDateString();
  const payload = {
    gen_time: new Date().toLocaleTimeString(),
    data: req.body,
  };

  if (phoneNumbers[date]) {
    phoneNumbers[date] = [
      ...Object.values(phoneNumbers[date]),
      payload,
    ];
  } else {
    phoneNumbers[date] = [payload];
  }
  const jsonData = JSON.stringify(phoneNumbers, null, 2);
  fs.writeFile('phoneNumbers.json', jsonData, (err) => {
    if (err) {
      return res.status(500).send({ message: 'Numbers be stored at the moment'});
    }
    return res.status(200).send({
      message: 'Numbers stored',
    });
  });
};

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', serveStatic(path.join(__dirname, '/dist')));

app.post('/api/storeNumbers', storeGeneratedNumbers);
app.get('/api/generatedNumbers', fetchGeneratedNumbers);

const port = process.env.PORT || 7000;
app.listen(port);

console.log(`Listening on ${port}`);
