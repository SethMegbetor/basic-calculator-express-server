const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// const port = 3000;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;

  res.send(`The result of the calculation is: ${result}`);
});

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);

  let bmi = weight / (height * height);
  res.send(`<h1>Your BMI is ${bmi}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server started. App listening on port ${PORT}`);
});
