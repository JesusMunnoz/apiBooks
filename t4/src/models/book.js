class Book {

    constructor(title, type, author, price, photo, id_book= 0, id_user= 0){
        this.id_book = id_book;
        this.id_user = id_user;
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
    }
    
}

module.exports = Book;

/*
{
  "title": "The Hobbit ",
  "type": "kindle",
  "author": "J.R.R. Tolkien",
  "price": 10,
  "photo": "https://www.planetadelibros.com/usuaris/libros/fotos/357/original/portada_el-hobbit_j-r-r-tolkien_202207271130.jpg",
  "id_book": 1,
  "id_user": 1
}

{
  "title": "Lord of the rings ",
  "type": "kindle",
  "author": "J.R.R. Tolkien",
  "price": 10,
  "photo": "picture",
  "id_book": 2,
  "id_user": 1
}

{
  "title": "The Hobbit -extended",
  "type": "kindle",
  "author": "J.R.R. Tolkien",
  "price": 105,
  "photo": "picture",
  "id_book": 3,
  "id_user": 1
}
*/