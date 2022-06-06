const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

app.use(express.json({limit: '1mb'}));

const { Customer } = require('./models');

// (async function() {
//   try {
//     const customers = await Customer.findAll();
//     console.log(customers);
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

app.get('/customers', async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
});

app.get('/customers/:id', async (req, res) => {
  // .findOne()
  const id = Number(req.params.id);
  const customers = await Customer.findOne( { where: {id} } );
  res.json(customers);
});

app.post('/customers', async (req, res) => {
  // .create
  const input = { id: null, full_name: req.body.full_name };
  const customers = await Customer.create(input);
  res.json(customers);
});

app.put('/customers/:id', async (req, res) => {
  // .update
  const id = Number(req.params.id);
  const input = { full_name: req.body.full_name };
  const customers = await Customer.update(input, {where: {id}});
  res.json(customers);
});

app.delete('/customers/:id', async (req, res) => {
  // .destroy
  const id = Number(req.params.id);
  const customers = await Customer.destroy( { where: {id} } );
  res.json({message: "Customr deleted."});
});

app.listen(3007);
