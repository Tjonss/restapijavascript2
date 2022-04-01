// Kommunicerar med databasen

const Book = require('./bookSchema')

// GET ALL BOOKS
exports.getBooks = async (req, res) => {

  try {
    const books = await Book.find();
    res.status(200).json(books)
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to get books.',
      err
    })
  }
}

// GET ONE BOOK BY ID
exports.getOneBook = (req, res) => {

  Book.exists({ _id: req.params.id }, (err, book) => {

  if(err) {
    return res.status(400).json({
      statusCode: 400,
      status: false,
      message: 'You made a bad request.',
      err
    })
  }
  if(!book) {
    return res.status(404).json({
      statusCode: 404,
      status: false,
      message: 'This book does not exist.',
      err
    })
  }

  Book.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: err.message,
        err
      })
    })
  })
}

// SKAPAR EN BOK
exports.createBook = (req, res) => {

  Book.exists({ title: req.body.title }, (err, result) => {
    
    if(err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'You made a bad request.',
        err
      })
    }

    if(result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'A book with this title already exists.'
      })
    }

    Book.create({
        title:        req.body.title,
        author:       req.body.author,
        desc:         req.body.desc,
        image:        req.body.image,
        price:        req.body.price
    })
    .then(data => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Book created successfully.',
        data
      })
      data.save()
    })
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: err.message,
      })
    })
  })
} 

// UPPDATERA BOK
exports.updateBook = (req, res) => {

  Book.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }
    if(!result) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'This book does not exist.'
      })
    }

    Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'The book was updated.',
          data
        })
      })
      .catch(err => {
        if(err.code === 11000) {
          return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'A book with this title already exist.',
            err
          })
        }
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update book.',
          err
        })
      })
    })
  }

// DELETE BOOK
exports.deleteBook = (req, res) => {

  Book.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request',
      })
    }
    if(!result) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'This book does not exists'
      })
    }

    Book.deleteOne({ _id: req.params.id })
      .then(() => {
        console.log(res.status)
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'Book was deleted.',
        })
      })
      .catch(err => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to delete book.',
          err
        })
      })
  })

}