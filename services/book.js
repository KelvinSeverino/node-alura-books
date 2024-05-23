const fs = require("fs")

function getAllBooks(){
    return JSON.parse(fs.readFileSync("db.json"))
}

function getBookById(id){
    const books =  JSON.parse(fs.readFileSync("db.json"))

    const bookFilter = books.filter(book => book.id === id)[0]
    return bookFilter
}

function storeBook(newBook){
    const books = JSON.parse(fs.readFileSync("db.json"))

    const newBooksList = [ ...books, newBook ]

    fs.writeFileSync("db.json", JSON.stringify(newBooksList))
}

function updateBook(modifications, id){
    let books = JSON.parse(fs.readFileSync("db.json"))
    const indexUpdated = books.findIndex(book => book.id === id)

    const bookUpdated = { ...books[indexUpdated], ...modifications }

    books[indexUpdated] = bookUpdated

    fs.writeFileSync("db.json", JSON.stringify(books))
}

function destroyBook(id){
    let books = JSON.parse(fs.readFileSync("db.json"))
    const indexToRemove = books.findIndex(book => book.id === id)

    books.splice(indexToRemove, 1);

    fs.writeFileSync("db.json", JSON.stringify(books))
}

module.exports = {
    getAllBooks,
    getBookById,
    storeBook,
    updateBook,
    destroyBook
}