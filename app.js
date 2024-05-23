const express = require("express")
const routeBook = require("./routes/book")

const app = express()
app.use(express.json())

app.use("/livros", routeBook)

const port = 8000

app.listen(port,  () => {
    console.log(`Escutando a porta ${port}`)
})