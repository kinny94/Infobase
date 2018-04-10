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
}