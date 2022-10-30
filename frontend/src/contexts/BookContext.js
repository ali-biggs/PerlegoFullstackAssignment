import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);

    const addBook = (title, author) => {
        setBooks([...books, { title, author }]);
    };

    const removeBook = (title) => {
        setBooks(books.filter(book => book.title !== title));
    };

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;