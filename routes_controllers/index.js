//import our express library
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

//exports
module.exports = router