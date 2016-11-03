var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

/*
 *  Middleware for unmatched requests
 *  so that the Angular router on client can take over.
 */
app.use((req, res) => {
    res.redirect('/');
});
app.listen(process.env.PORT, process.env.IP, ()=> {
    console.log('The server is listening on port ' + process.env.PORT);
});