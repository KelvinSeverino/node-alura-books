const express = require("express")
const cors = require("cors")
const routeBook = require("./routes/book")
const routeFavorite = require("./routes/favorite")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use("/livros", routeBook)
app.use("/favoritos", routeFavorite)

const port = 8000

app.listen(port,  () => {
    console.log(`Escutando a porta ${port}`)
})