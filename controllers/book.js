function getBooks(req, res) {
    try {
        res.send("Você fez uma requisição do tipo GET")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks
}