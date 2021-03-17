const express = require('express');
const userController = require('../../controllers/userController');

router = express.Router();

// router.get('/', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         message: ' user route'
//     })
// })

router
.route('/')
.post(userController.createUser)
.get(userController.getUsers);

router
.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);

module.exports = router;