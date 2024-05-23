const { Router } = require("express")

const router = Router()

//req = request, res = response
router.get('/', (req, res) => {
    res.send("Olá mundo!")
})

module.exports = router