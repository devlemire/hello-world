const express = require('express');
const cors = require('cors');

const app = express();

app.use( cors() );
app.use( express.static(`${__dirname}/../public/build`) ); 

app.get('/api/test', ( req, res, next ) => {
  res.status(200).send('Super Secret Message');
});

app.listen( 3000, () => { console.log('App listening on port 3000.'); } );