const { Router } = require ("express")
const router = Router();
const booksCtrl = require("../controller/books.controller")

router.get("/books", booksCtrl.getBooks);
router.post("/books", booksCtrl.createBooks);
router.put("/books", booksCtrl.updateBooks);
router.delete("/books", booksCtrl.deleteBooks);
router.get("/books/:id", booksCtrl.getBooksId);

module.exports = router;