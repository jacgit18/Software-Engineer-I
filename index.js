const express = require('express');
require('dotenv').config();
const fetch = require('node-fetch');
const axios = require('axios');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (request, response) => {
  response.send("hello")
//   response.json(Prod)
});

// app.get('/test', async (request, response) => {
 
  // response.send(request.params.name)
// });

// app.post('/add', (req, res) => {
//   console.log(req.body.title);
//   res.sendStatus(200)
// })

app.get('/weather/:latlon', async (request, response) => {
  console.log(request.params);

  const api_key = process.env.API_KEY;
  const api_url = ``;
  const api_response = await fetch(api_url);
  const api_data = await api_response.json();



  // const data = {
  //   apiOne: api_data,
  // };
  // response.json(data);
});


app.listen(port, () => {
    console.log(`Starting server at ${port}`);
  });