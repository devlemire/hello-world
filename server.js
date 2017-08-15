const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use( cors() );
app.use( express.static(`${__dirname}/public/build`) ); 

app.get('/api/test', ( req, res, next ) => {
  res.status(200).send('Super Secret Message');
});

app.listen( config.port || 3000, () => { console.log(`App listening on port ${ config.port || 3000 }`); } );