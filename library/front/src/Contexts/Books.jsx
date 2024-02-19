import { createContext, useReducer, useState } from "react";
import useBooks from "../Hooks/useBooks";
import booksReducer from "../Reducers/booksReduser";

export const Books = createContext();

export const BooksProvider = ({children}) => {

    const [books, dispachBooks] = useReducer(booksReducer, []);
    const [deleteBook, setDeleteBook] = useState(null);
    const [editBook, setEditBook] = useState(null);

    const {storeBook, setStoreBook, updateBook, setUpdateBook, destroyBook, setDestroyBook} = useBooks(dispachBooks);

    return (
        <Books.Provider value={{
            books, dispachBooks,
            storeBook, setStoreBook,
            updateBook, setUpdateBook,
            destroyBook, setDestroyBook,
            deleteBook, setDeleteBook,
            editBook, setEditBook

        }}>
            {children}
        </Books.Provider>
    )
}