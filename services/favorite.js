const fs = require("fs")

function getAllFavorites(){
    return JSON.parse(fs.readFileSync("dbFavorites.json"))
}

function storeFavorite(id){
    const books = JSON.parse(fs.readFileSync("db.json"))
    const favorites = JSON.parse(fs.readFileSync("dbFavorites.json"))

    const searchedBook = books.find(book => book.id === id)
    const newFavoritesList = [ ...favorites, searchedBook ]

    fs.writeFileSync("dbFavorites.json", JSON.stringify(newFavoritesList))
}

function destroyFavorite(id){
    let books = JSON.parse(fs.readFileSync("dbFavorites.json"))
    const indexToRemove = books.findIndex(book => book.id === id)

    books.splice(indexToRemove, 1);

    fs.writeFileSync("dbFavorites.json", JSON.stringify(books))
}

module.exports = {
    getAllFavorites,
    storeFavorite,
    destroyFavorite,
}