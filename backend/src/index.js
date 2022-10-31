const express = require('express');
const mysql = require('mysql2');
const { getBook } = require('./utils/queryHelper');

const app = express();
const port = 3000

const connection = mysql.createConnection({
    host: 'database',
    user: 'perlego',
    password: 'perlego',
    database: 'perlego'
});

const genericError = "Something went wrong";

connection.connect(error => {
    if (error) {
        console.log("A error has been occurred "
            + "while connecting to database.");
        throw error;
    }

    app.listen(port, () => {
        console.log(`Backend app listening on port ${port}`)
    });
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello, friend!' })
});

// app.get('/books/suggestions', (req, res) => {
//     res.json({
//         count: 1,
//         books: [
//             {
//                 id: 1,
//                 title: 'foo',
//                 author: 'bar',
//                 cover: 'https://www.perlego.com/books/RM_Books/baker_academic_gcmneit/9781493405961_300_450.jpg'
//             },
//         ]
//     })
// })

app.get("/:id", async function (request, response) {
    const { id } = request.params
    try {
        const [result] = await getBook(id)
        if (result.length > 0) {
            response.send({ success: true, result: result[0] })
        } else {
            response.status(404).send({
                success: false,
                error: `No book found with id ${id}`,
            })
        }
    } catch (error) {
        response.status(500).send({
            success: false,
            error: genericError,
        })
    }
})