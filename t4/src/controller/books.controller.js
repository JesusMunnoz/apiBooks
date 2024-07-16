const Book = require("../models/book");

let books = [
    new Book("El capitán Alatriste", "Blada", "Arturo Perez-Reverte", 10.40, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 1, 1),
    new Book("La Bruja Mon", "Blada", "Pilar Mateos", 3.60, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 2, 1),
    new Book("Fray Perico y su borrico", "Blada", "Juan Muñoz Martín", 8.74, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 3, 1)
    //new Book("Don Quijote de la Mancha", "Dura", "Miguel de Cervantes", 500000, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 4, 1),
    //new Book("El Señor de los anillos", "Dura", "J. R. R. Tolkien", 65, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 5, 1)
];

function getBooks (req, res){
    let respuesta = {error: false, codigo: 200, data: books}
    res.json(respuesta);
}

function createBooks (req, res) {
    let {title, type, author, price, photo, id_book, id_user} = req.body;

    if(books.some(book => book.id_book === id_book)){
        let repuesta = {error:true, codigo:400, mensaje: "ya existe libro"}
        return res.status(400).json(repuesta);
    }

    let newBook = new Book (title, type, author, price, photo, id_book, id_user);
    books.push(newBook);
    let respuesta = {error: false, codigo: 201, data: newBook};
    res.status(201).json(respuesta);
}

function updateBooks (req, res) {
    let {id_book, title, type, author, price, photo} = req.body;
    let bookIndex = books.findIndex(book => book.id_book == id_book);

    if(bookIndex !== -1) {
        books[bookIndex].title = title;
        books[bookIndex].type = type;
        books[bookIndex].author = author;
        books[bookIndex].price = price;
        books[bookIndex].photo = photo;

        let respuesta = {error: false, codigo: 200, data: books[bookIndex]}
        res.json(respuesta);
    }else{
        let respuesta = {error: true, codigo: 404, mensaje: "error, libro no encontrado"};
        res.status(404).json(respuesta);
    }
}

function deleteBooks (req, res) {
    let {id_book} = req.body;
    let bookIndex = books.findIndex(book => book.id_book == id_book);
    
    if (bookIndex !== -1){
        let deleteBook = books.splice(bookIndex, 1);
        
        let respuesta = {error: false, codigo: 200, data: deleteBook[0]};
        res.json(respuesta);
    }else{
        let respuesta = {error: true, codigo: 404, mensaje: "error, libro no encontrado"};
        res.status(404).json(respuesta);
    }
}

function getBooksId(req, res) {
    let {id} = req.params;
    console.log("id del libro es: ", id);
    let book = books.find(book => book.id_book == parseInt(id));
    console.log("el libro es: ", book);
    if (book){
        let respuesta = {error: false, codigo: 200, data: book};
        res.json(respuesta);
    }else{
        let respuesta = {error: true, codigo: 404, mensaje: "error, libro no encontrado"};
        res.status(404).json(respuesta);
    }
}

module.exports = {getBooks, createBooks, updateBooks, deleteBooks, getBooksId}
