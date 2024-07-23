const { pool } = require('../database');

const getBooks = async (req, res) => {
    try {
        const { id_user, id_book } = req.query;

        // Si id_book está presente en la consulta, obtener un libro específico
        if (id_book) {
            const [rows] = await pool.query("SELECT * FROM book WHERE id_user = ? AND id_book = ?", [id_user, id_book]);
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).json({ message: "Book no se encuentra" });
            }
            // Si no, obtener todos los libros del usuario
        } else {
            const [rows] = await pool.query("SELECT * FROM book WHERE id_user = ?", [id_user]);
            res.json(rows);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

const addBook = async (req, res) => {
    try {
        const { id_user, title, type, author, price, photo } = req.body;
        const [result] = await pool.query("INSERT INTO book (id_user, title, type, author, price, photo) VALUES (?, ?, ?, ?, ?, ?)", [id_user, title, type, author, price, photo]);
        res.json({ id_book: result.insertId, id_user, title, type, author, price, photo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id_book, id_user, title, type, author, price, photo } = req.body;
        const [result] = await pool.query("UPDATE book SET title = ?, type = ?, author = ?, price = ?, photo = ? WHERE id_book = ? AND id_user = ?", [title, type, author, price, photo, id_book, id_user]);
        if (result.affectedRows > 0) {
            res.json({ message: "Book actualizado" });
        } else {
            res.status(404).json({ message: "Book no se encuentra" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id_book, id_user } = req.body;
        const [result] = await pool.query("DELETE FROM book WHERE id_book = ? AND id_user = ?", [id_book, id_user]);
        if (result.affectedRows > 0) {
            res.json({ message: "Book eliminado" });
        } else {
            res.status(404).json({ message: "Book no se encuentra" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getBooks, /*getBook,*/ addBook, updateBook, deleteBook };