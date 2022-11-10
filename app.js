const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')


const artController = require('./controllers/art.js')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}));
app.use('/public/css', express.static(__dirname + 'public/css'))

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.get('', (req,res) => {
    res.render('index')
})

app.get('/about', (req,res) => {
    res.render('about')
})

app.get('/art', (req,res) => {
    res.render('art')
})

app.post('/art', (req,res) => {
    artController.art_create_post(req, res)
})

app.get('/artupdate', (req,res) => {
    res.render('artupdate')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.get('/blogupdate', (req, res) => {
    res.render('blogupdate')
})

app.listen(port, () => console.log(`App listening on port ${port}.`))

mongoose.connect(process.env.mongoDBURL, 
    {useNewUrlParser: true,
    useUnifiedTopology: true},
    () => {
        console.log("MongoDB Connected.");
    });
