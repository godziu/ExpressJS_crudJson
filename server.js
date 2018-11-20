var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var stringyFile;

app.use( bodyParser.json());

app.get('/getNote', function(req, res) {
  
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if(err) throw err;
        stringyFile = data;
        res.send( data );
    });
});

app.post( '/updateNote/:note', function(req, res) {
    stringyFile = req.params.note;
    fs.appendFile( './test.json', stringyFile, function(err) {
        if(err) throw err;
        res.send( stringyFile );
        console.log('file updated.');
    });
});

app.listen(3000);