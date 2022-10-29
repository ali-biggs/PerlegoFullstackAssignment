const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000

const connection = mysql.createConnection({
    host: 'database',
    user: 'perlego',
    password: 'perlego',
    database: 'perlego'
});

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

app.get('/books/suggestions', (req, res) => {
    res.json({
        count: 1,
        books: [
            {
                id: 1,
                title: 'foo',
                author: 'bar',
                cover: 'https://www.perlego.com/books/RM_Books/baker_academic_gcmneit/9781493405961_300_450.jpg'
            },
        ]
    })
})