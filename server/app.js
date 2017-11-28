const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let data = require('./data.json');

app.get('/contacts', (req, res) => {
  res.send(data);
});

app.post('/contacts', (req, res) => {
  data.push(Object.assign({ id: +data[data.length - 1].id + 1 }, req.body));
  res.sendStatus(200);
});

app.post('/contacts/:id', (req, res) => {
  if (findContact(req.params.id, data)) {
    data.map((contact) => {
      contact.id === req.params.id ? Object.assign(contact, req.body) : contact;
    });
    res.sendStatus(200);
  }
  else res.send('contact not found');
});

app.delete('/contacts/:id', (req, res) => {
  if (findContact(req.params.id, data)) {
    data = data.filter((contact) => contact.id !== req.params.id)
    res.sendStatus(200);
  }
  else res.send('contact not found');
});


const findContact = (id, contactsArray) => contactsArray.some((contact) => contact.id === id);

app.listen(8080);
