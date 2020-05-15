// Models directory references
let express = require('express')
let db = require('../models')
let Record = db.Record

let router = express.Router()

router.get('/record', function(req, res, next){
    Record.findAll().then( records => {
        return res.json(records)
    })
})

// Post reqeust message response
router.post('/record', function (req, res, next) {
    Record.create(req.body ).then( data => {
        return res.status(201).send('ok')
    })

})


// Export module - MUST BE LAST!
module.exports = router