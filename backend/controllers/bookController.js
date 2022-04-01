const router = require('express').Router();
const bookModel = require('../models/books/bookModel')
const auth = require('../authentication/auth')


// Hämtar alla böcker
router.get('/', bookModel.getBooks)

// Hämtar en bok med ID
router.get('/:id', bookModel.getOneBook)

// Skapar en ny
router.post('/', bookModel.createBook)

// Uppdaterar 
router.put('/:id', auth.verifyToken, bookModel.updateBook)

// Tar bort 
router.delete('/:id', auth.verifyToken, bookModel.deleteBook)


module.exports = router;