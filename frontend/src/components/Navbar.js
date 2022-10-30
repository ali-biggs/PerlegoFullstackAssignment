import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h2>Reading List</h2>
            <p>You currently have {books.length} book(s) in your reading list:</p>
        </div>
    );
}

export default Navbar;