const { Router } = require("express")

const router = Router()

//req = request, res = response
router.get('/', (req, res) => {
    res.send("Você fez uma requisição do tipo GET")
})

router.post('/', (req, res) => {
    res.send("Você fez uma requisição do tipo POST")
})

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