const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const path = require('path')
const getGenre = require('./models/queries/getGenre.js');
const getBook = require('./models/queries/getBook.js');
const getBookById = require('./models/queries/getBookId.js');
const addGenre = require('./models/queries/addGenre.js');
const addBook = require('./models/queries/addBook.js');
var morgan = require('morgan')
app.use(morgan('combined'))



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/books',(req,res)=>{
  getBook.getBook((err, book)=>{
    res.json(book)
  })
})

app.get('/api/books/:id',(req,res)=>{
  getBookById.getBookById(req.params.id,(err, bookById)=>{
    res.json(bookById)
  })
})

app.get('/api/genres', (req,res)=>{
  getGenre.getGenre((err, genre)=>{
    res.json(genre)
  })
})

app.post('/api/genres', (req,res)=>{
  var genre = req.body;
  addGenre.addGenre(genre, (err, genre)=>{
    res.json(genre)
  })
})

app.post('/api/books', (req,res)=>{
  var {title, genre, description, author, publisher, pages, image_url, buy_url} = req.body;

  addBook.addBook(title, genre, description,
  author, publisher, pages, image_url,
   buy_url,(err,result)=>{
        res.json(result)
  })
})



app.listen(3000, ()=>{
  console.log('app is running on port 3000');
})
