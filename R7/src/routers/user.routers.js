const { Router } = require('express');
const router = Router();
const usersCtrl = require("../controller/user.controller")

router.get('/books', usersCtrl.getBooks);
//router.get('/books', usersCtrl.getBook);
router.post('/books', usersCtrl.addBook);
router.put('/books', usersCtrl.updateBook);
router.delete('/books', usersCtrl.deleteBook);

module.exports = router;