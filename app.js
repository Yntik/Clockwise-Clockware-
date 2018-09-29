

let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let server = express();

server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.set('views', './views');
server.set('view engine', 'pug');

let masters = require('./routes/masters');
server.use('/', masters);

server.get('/',(req,res)=> {
    res.render('startpage') ;
});
server.listen(3000);

