const { getAllBooks, getBookById, storeBook, updateBook, destroyBook } = require("../services/book")

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

        if(id && Number(id)){
            const book = getBookById(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("ID inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function insertBook(req, res) {
    try {
        const newBook = req.body
        if(req.body.id && req.body.name){
            storeBook(newBook)  
            res.status(201)
            res.send("Livro inserido com sucesso!")
        } else {
            res.status(422)
            res.send("Verifique os campos enviados!")
        }
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

        if(id && Number(id)){
            updateBook(body, id)     
            res.send("Livro atualizado com sucesso!")
        } else {
            res.status(422)
            res.send("ID inválido!")
        }
    } catch (error) {        
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res)
{
    try {
        const id = req.params.id

        if(id && Number(id)){
            destroyBook(id) 
            res.status(204)
            res.send("Livro apagado com sucesso!")
        } else {
            res.status(422)
            res.send("ID inválido!")
        }
    } catch (error) {        
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    insertBook, 
    patchBook,
    deleteBook
}