const express = require('express');
const path = require('path');
const http = require('http');
const sass = require('node-sass-middleware');
const bodyParser = require('body-parser');
const reload = require('reload');

const app = express();

const cors = require('./middleware/cors');
// call router
const loginRouter = require('./router/login');

const port = 8000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'pug');




// use dependencies library
app.use('/bootstrap', express.static(`${__dirname}/node_modules/bootstrap/dist`))
app.use('/jquery', express.static(`${__dirname}/node_modules/jquery/dist`))
app.use('/popper', express.static(`${__dirname}/node_modules/popper.js/dist/umd`))
//app.use('/reload', express.static(`${__dirname}/node_modules/reload/lib`))

// use sass-midleware
app.use(
    sass({
        src: __dirname + '/public', //where the sass files are 
        dest: __dirname + '/public', //where css should go
        debug: true, // obvious
        outputStyle: 'compressed',
    })
);

// use static file
app.use('/', express.static(path.join(__dirname, 'public')))

// use cors
app.use(cors);

app.get('/', (req, res) =>
{
    res.send('Hello World');
});

// use router
app.use('/login', loginRouter);

app.get('*', (req, res) =>
{
    res.render('404', {title: 'Not Found'})
})


const server = http.createServer(app);

server.listen(port, () =>
{
    console.log(`App is running on port ${port}`);
})

reload(app).then(() =>{
    console.log("Page reloaded!");
});
