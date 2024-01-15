import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios';

const BOOKS_URL = 'https://in3.dev/knygos/';


export const BooksData = createContext();

export const BooksDataProvider = ({children}) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(BOOKS_URL)
            .then(res => setBooks(res.data))
    }, [setBooks]);

    return (
        <BooksData.Provider value={{
           books
        }}>
            {children}
        </BooksData.Provider>
    );
}