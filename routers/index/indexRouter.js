const express = require('express')
const router = express()

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

module.exports = router