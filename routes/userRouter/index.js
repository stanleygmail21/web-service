const express = require('express');

router = express.Router();

// router.get('/', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         message: ' user route'
//     })
// })

router
.route('/')
.get((req, res) => {
    res.status(200).json({
        status: 'success',
        message: ' user route'
    })
})

module.exports = router;