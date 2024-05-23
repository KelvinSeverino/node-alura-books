const fs = require("fs")

const actuallyData = JSON.parse(fs.readFileSync("db.json"))
const newData = { id: '3', nome: 'Novo Livro'}

fs.writeFileSync("db.json", JSON.stringify([...actuallyData, newData]))

console.log(JSON.parse(fs.readFileSync("db.json")))