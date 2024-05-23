const fs = require("fs")

function getAllBooks(){
    return JSON.parse(fs.readFileSync("db.json"))
}

module.exports = {
    getAllBooks
}