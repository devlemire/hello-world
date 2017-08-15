const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use( cors() );
app.use( express.static(`${__dirname}/public/build`) ); 

app.get('/api/test/2', ( req, res, next ) => {
  res.status(200).send('Super Secret Message 2');
});

app.listen( config.port || 3000, () => { console.log(`App listening on port ${ config.port || 3000 }`); } );