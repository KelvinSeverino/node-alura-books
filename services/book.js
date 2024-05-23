const fs = require("fs")

function getAllBooks(){
    return JSON.parse(fs.readFileSync("db.json"))
}

function getBookById(id){
    const books =  JSON.parse(fs.readFileSync("db.json"))

    const bookFilter = books.filter(book => book.id === id)[0]
    return bookFilter
}

module.exports = {
    getAllBooks,
    getBookById
}