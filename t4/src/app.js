const express = require("express")
const cors = require("cors")
const bookRouter = require("./routers/book.routers")
const booksRouter = require("./routers/books.routers")
const errorHandling = require("./error/errorHandling")

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", bookRouter);
app.use("/", booksRouter); 

app.use(function(req, res, next)
    {
        res.status(404).json({error:true,
                                codigo: 404,
                                message: "endpoint not found"})
    })

app.use (errorHandling);

module.exports = app;