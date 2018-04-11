module.exports = ( app ) => {

    app.get( '/', ( req, res ) => {
        console.log("Hello");
        res.send( "Hello" );
    });

    app.get( '/steam', ( req, res ) => {
        res.send({ "steam": "You will get steam data here!!" });
    });

    app.get( '/github', ( req, res ) => {
        res.send({ "github": "You will get github data here!!"});
    });

    app.get( '/movies', ( req, res ) => {
        res.send({ "movies": "You will get the movies information here!!" });
    });

    app.get( '/music', ( req, res ) => {
        res.send({ "music": "You will get the music information here!!" });
    });

    app.get( '/weather', ( req, res ) => {
        res.send({ "weather": "You will get the weather iinformation here!! "});
    });

    app.get( '/books', ( req, res ) => {
        res.send({ "books": "You will get the books infromations here!!" });
    });

    app.get( '/googleplus', ( req, res ) => {
        res.send({ "googleplus": "You will get googleplus information here!!"  });
    });

    app.get( '/expedia', ( req, res ) => {
        res.send({ "expedia": "You will get expedia information here!! "});
    });
}