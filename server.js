// import app from './app';
const app = require('./app.js');

const port = process.env.PORT || 4000; // 5



app.listen(port, () => {
    console.log(`Starting server at ${port}`);
  });

