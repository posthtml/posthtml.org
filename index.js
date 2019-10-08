const express = require('express')
const posthtml = require('express-posthtml')
const morgan = require('morgan')
const fs = require('fs')

const app = express()
const plugins = [
    require('htmlnano')()
  ];
const options = {}

app.use(morgan('dev'))
// app.engine('html', posthtml);
// app.set('view engine', 'html');
// app.set('views', './views');
// app.set('view options', { plugins, options });
app.get('/', (req, res) => {
    const html = fs.readFileSync('./views/index.html')
    res.send(html.toString())
})
app.listen()