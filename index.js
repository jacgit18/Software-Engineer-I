const express = require('express');
require('dotenv').config();
const fetch = require('node-fetch');
const axios = require('axios');


const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.get('/', async (request, response) => {

//   const id = process.env.PUBLIC_ID;
//   const secret = process.env.SECRET;
//   const url = 'https://www.reddit.com/api/v1/me/prefs';
//   response = await fetch(url)
//   const data = await response.json();
//   console.log(data);
// //   response.json(Prod)
// });


// app.get('/', async (request, response) => {
//   const sec_key = process.env.API_KEY;

//   const url = `https://api.sec-api.io?token=${sec_key}`
//   response = await fetch(url)
//   const data = await response.json();
//   console.log(data);
// //   response.json(Prod)
// });

// app.get('/:user', async (request, response) => {
app.get('/', async (request, response) => {

  const url = `https://api.github.com/users/user?${jacgit18}`
  let res = await fetch(url)
  const data = await res.json();
  // console.log(data);
  response.json(data)
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