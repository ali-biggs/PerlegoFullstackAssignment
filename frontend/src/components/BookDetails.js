import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
    const { removeBook } = useContext(BookContext);
    return (
        <li onClick={() => removeBook(book.title)}>
            <div className="title-author" style={{ textAlign: "left" }}>{book.title} - {book.author}</div>
        </li>
    );
}

export default BookDetails;