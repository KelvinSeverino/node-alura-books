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

module.exports = {
    getAllBooks,
    getBookById,
    storeBook,
}