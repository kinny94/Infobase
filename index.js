const express = require( 'express' );

const app = express();
const PORT = process.env.PORT || 5000;

require('./routes/routes')( app );

app.listen( PORT, () => {
    console.log( "Server is running on port 5000 " );
});