const { Router } = require("express")
const { getBooks, getBook, insertBook, patchBook, deleteBook } = require("../controllers/book")

const router = Router()

//req = request, res = response
router.get('/', getBooks)
router.get('/:id', getBook)
router.post('/', insertBook)
router.patch('/:id', patchBook)
router.delete('/:id', deleteBook)

module.exports = router