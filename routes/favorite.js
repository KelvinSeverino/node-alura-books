const { Router } = require("express")
const { getFavorites, insertFavorite, deleteFavorite } = require("../controllers/favorite")

const router = Router()

//req = request, res = response
router.get('/', getFavorites)
router.post('/:id', insertFavorite)
router.delete('/:id', deleteFavorite)

module.exports = router