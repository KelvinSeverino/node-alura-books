const express = require("express")
const cors = require("cors")
const routeBook = require("./routes/book")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use("/livros", routeBook)

const port = 8000

app.listen(port,  () => {
    console.log(`Escutando a porta ${port}`)
})