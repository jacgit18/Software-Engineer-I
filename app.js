// import express from 'express';
const express = require('express');
require('dotenv').config();
const fetch = require('node-fetch');
const axios = require('axios');
// const cors = require('cors');

const app = express();

// app.use(cors());

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

  const url = 'https://www.reddit.com/api/v1/me/prefs';

const protocol = 'https://'; // 1
const sub_domain ='www.' // not required 2
const top_level_domain = '.io' // 4
const domain = `api.hatchways${top_level_domain}` // 3
const hostname = protocol + domain; // 1 + (3 + 4)
const path = '/assessment/blog/posts'; // 6
const queryString ='?tag=tech' // 7
const fullPath = path + queryString
const fragmentIdentifier = '' // 8
const urlroute = hostname + fullPath; // 
// console.log(urlroute);

// const secret = process.env.SECRET
// const id = process.env.ID




//CRUD

//CREATE EndPoint
// why only display in browser on get and not post requests
app.post('/users', async (request, response) => {

  // const url = `https://api.github.com/users/user?${jacgit18}`
  const url = `https://api.github.com/users/jacgit18`

  const res = await fetch(url)
  const data = await res.json();
  // let parsedBody = JSON.parse(data);
  // let user = parsedBody.login
  // // console.log(data.login);
  // response.json(data);
  // response.send({user})
  response.send({data})


});




const ReqData = app.get('/', async (request, response) => {
  try{
   const api_res = await axios.get(urlroute);
   const data = await api_res.data.posts; // no need to convert to json

    let options = {
      success: true,
    status: api_res.status,
    statusText: api_res.statusText
    }

   response.send(options)
  } catch (e) {

  }
 

});




// READ EndPoint
app.get('/api/ping', async (request, response) => {
  try {

  let api_response = await axios.get(urlroute)
  let data = await api_response.data.posts

// The order of arrays in json is preserved
// Sort the array based on the keys, and forward it as the response
 
    
    const results = JSON.parse(JSON.stringify( data, ["id","author","authorId", "likes", "popularity", "reads", "tags"] ));

   console.log(results[0].tags)

  response.send({
    data: results
  })

  } catch (error) {

    if(!results[0].tags){
      response.body(error)
      api_response.statusText = 400
    }

// Response status code: 400
// If a `sortBy` or `direction` are invalid values, specify an error like below:
// Response body (JSON):
// {
// "error": "sortBy parameter is invalid"
// }
// Response status code: 400

  }

  
});


// app.get('/:user', async (request, response) => {
// app.get('/', async (request, response) => {

  // const url = `https://api.github.com/users/user?${jacgit18}`
  // const url = `https://api.github.com/users/jacgit18`

  // const res = await fetch(url)
  // const data = await res.json();
  // let parsedBody = JSON.parse(data);
  // let user = parsedBody.login
  // // console.log(data.login);
  // response.json(data);
  // response.send({user})
//   response.send({data})


// });


// app.get('/test', async (request, response) => {
 
  // response.send(request.params.name)
// });

// app.post('/add', (req, res) => {
//   console.log(req.body.title);
//   res.sendStatus(200)
// })

// app.get('/weather/:latlon', async (request, response) => {
//   console.log(request.params);


//   const api_url = ``;
//   const api_response = await fetch(api_url);
//   const api_data = await api_response.json();



//   // const data = {
//   //   apiOne: api_data,
//   // };
//   // response.json(data);
// });

module.exports = app
// export default app;

