const Book = require("../models/book");

let bookDB = {}

function getBook (req, res){
    let books = Object.values(bookDB);
    let respuesta = {error: false, codigo: 200, data: books};
    res.json(respuesta);
};

function createBook (req, res) {
    let {title, type, author, price, photo, id_book, id_user} = req.body;

    if(bookDB[id_book]){
        let respuesta = {error: true, codigo: 400, mensaje: "Ya existe libro"};
        return res.status(400).json(respuesta);
    }

    let newBook = new Book (title, type, author, price, photo, id_book, id_user);
    bookDB[newBook.id_book] = newBook;
    let respuesta = {error: false, codigo: 201, data: newBook};
    res.status(201).json(respuesta);
};

function updateBook (req, res) {
    let {id_book, title, type, author, price, photo}=req.body;
    let book = bookDB[id_book];

    if(book) {  
        book.title = title;
        book.type = type;
        book.author = author;
        book.price = price;
        book.photo = photo;

        let respuesta = {error: false, codigo: 200, data: book};
        res.json(respuesta);
    }else{
        let respuesta = {error: true, codigo: 404, mensaje: "error, libro no encontrado"};
        res.status(404).json(respuesta);
    }
};

function deleteBook (req, res) {
    let {id_book} = req.body;

    if(bookDB[id_book]){
        delete bookDB[id_book];
        let respuesta = {error: false, codigo: 200, mensaje: "libro eliminado"};
        res.json(respuesta);
    }else{
        let respuesta = {error: true, codigo: 404, mensaje: "error, libro no encontrado"};
        res.status(404).json(respuesta);
    }
};

module.exports = {getBook, createBook, updateBook, deleteBook}