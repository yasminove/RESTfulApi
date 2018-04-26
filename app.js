const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')

// require your essential files



var morgan = require('morgan')
app.use(morgan('combined'))


// initialize bodyParser here
app.use()

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


// Set up a route for /api/books/ which can rerieve all the books in the database with GET method
app.get()




// Set up a route which can get a book by it's id
app.get('/api/books/:id',(req,res)=>{

})

// Set up a route which can retrieve all genres
app.get('/api/genres', (req,res)=>{

})


// set up a route which can save a new genre to your db
app.post('/api/genres', (req,res)=>{

})


// set up the route that can post a new book to your db
app.post('/api/books', (req,res)=>{

})



app.listen(3000, ()=>{
  console.log('app is running on port 3000');
})
