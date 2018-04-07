module.exports = ( app ) => {

    app.get( '/', ( req, res ) => {
        console.log("Hello");
        res.send( "Hello" );
    });

    app.get( '/steam', ( req, res ) => {
        res.send( "Place for Steam!!");
        console.log( routes );
    });

    app.get( '/github', ( req, res ) => {
        res.send("Place for Github!!");
    });
}