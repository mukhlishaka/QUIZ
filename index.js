const express = require('express')
const app = express()
const { Article } = require('./models')
const books = require('./models/books')

app.use(express.json())

app.get('/books/:id', (req, res) => {
books.findOne({
where: { id: req.params.id }
})
.then(books => {
res.status(200).json(books)
})
})