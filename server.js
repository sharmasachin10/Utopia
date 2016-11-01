var express     = require('express'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    app         = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//node_modules directly to keep everything as simple as possible
app.use('/node_modules', express.static(__dirname + '/node_modules')); 

//The src folder has our static resources (index.html, css, images)
app.use(express.static(__dirname + '/client')); 



app.post('/api/users', (req, res) => {
	let user = req.body;
	fs.readFile('users.json',function(err,content){
		if(err) throw err;
		var parseJson = JSON.parse(content);
		parseJson.push(user);
		fs.writeFile('users.json',JSON.stringify(parseJson ,null, 4),function(err){
			if(err) throw err;
			res.json({success:'done'});
		});
	});


});



// redirect all others to the index (HTML5 history)
app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.listen(3000);

console.log('Express listening on port 3000.');

