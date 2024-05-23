const { getAllBooks, getBookById, storeBook, updateBook } = require("../services/book")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id
        const book = getBookById(id)
        res.send(book)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function insertBook(req, res) {
    try {
        const newBook = req.body
        storeBook(newBook)  
        res.status(201)
        res.send("Livro inserido com sucesso!")
    } catch (error) {        
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res)
{
    try {
        const id = req.params.id
        const body = req.body

        updateBook(body, id) 

        res.send("Livro atualizado com sucesso!")
    } catch (error) {        
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    insertBook, 
    patchBook
}