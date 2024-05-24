const { getAllFavorites, storeFavorite, destroyFavorite } = require("../services/favorite")

function getFavorites(req, res) {
    try {
        const books = getAllFavorites()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function insertFavorite(req, res) {
    try {        
        const id = req.params.id
        storeFavorite(id)  
        res.status(201)
        res.send("Favorito inserido com sucesso!")
    } catch (error) {        
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorite(req, res)
{
    try {
        const id = req.params.id

        if(id && Number(id)){
            destroyFavorite(id) 
            res.status(204)
            res.send("Favorito apagado com sucesso!")
        } else {
            res.status(422)
            res.send("ID inválido!")
        }
    } catch (error) {        
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavorites,
    insertFavorite,
    deleteFavorite,
}