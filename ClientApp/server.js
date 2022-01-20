var port = process.env.PORT || 8080;

var server = app.listen(port, ()=> {
    console.log(`App is running on port ${port}` );
});