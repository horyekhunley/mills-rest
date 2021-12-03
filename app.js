const express = require("express");
const mongoose = require('mongoose')
const Book = require('./models/bookModel')

const app = express();
const bookRouter = express.Router()

app.use(express.json());

const db = mongoose.connect('mongodb://localhost/bookApi')

app.get("/", (req, res) => {
  res.send("Hello");
});
bookRouter.route('/books')
.get((req, res) => {
  Book.find((err, books) => {
    if(err){
      return res.send(err)
    }
      return res.send(books)
  })
})
app.use('/api', bookRouter)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
