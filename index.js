var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('resume');
})

app.listen(8080, ()=>{
    console.log("Listening on PORT 8080")
})