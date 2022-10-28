const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000

const connection = mysql.createConnection({
    host: 'localhost:8001',
    user: 'perlego',
    password: 'perlego',
    database: 'perlego'
})

connection.connect()

app.get('/', (req, res) => {
    res.json({ message: 'Hello, friend!' })
})

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

app.listen(port, () => {
    console.log(`Backend app listening on port ${port}`)
})