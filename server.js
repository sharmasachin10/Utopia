var express     = require('express'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    app         = express(),
    mime 		= require('mime'),
    multer 		= require('multer'),
    path 		= require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var storage = multer.diskStorage({
    destination: function (req,res, cb) {
        cb(null, path.join(__dirname,'./client/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.'+mime.extension(file.mimetype));
    }
});

//node_modules directly to keep everything as simple as possible
app.use('/node_modules', express.static(path.join(__dirname,'./node_modules'))); 

//The src folder has our static resources (index.html, css, images)
app.use(express.static(path.join(__dirname,'./client'))); 



app.post('/api/users', (req, res) => {
	"use strict"
	let user = req.body;

	fs.readFile('users.json',function(err,content){
		let parseJson;
		try {
			parseJson = JSON.parse(content);
			parseJson.push(user);
			fs.writeFile(path.join(__dirname,'./users.json'),JSON.stringify(parseJson ,null, 4),function(err){
				if(err) throw err;
				res.json({success:'done'});
			});
		} catch (e) {
		    res.json({error:e});
		}	
	});
});


var upload = multer({storage: storage});

app.post('/api/imageupload', upload.single('image'), (req, res) => {
	res.json({name:req.file.filename}); 
});



// redirect all others to the index (HTML5 history)
app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'./client/index.html'));
});

app.listen(process.env.PORT ||3000);

console.log('Express listening on port 3000.');

