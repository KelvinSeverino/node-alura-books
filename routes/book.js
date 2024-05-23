const { Router } = require("express")
const { getBooks, getBook, insertBook } = require("../controllers/book")

const router = Router()

//req = request, res = response
router.get('/', getBooks)
router.get('/:id', getBook)
router.post('/', insertBook)

router.patch('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH")
})

router.put('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PUT")
})

router.delete('/', (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE")
})

module.exports = router