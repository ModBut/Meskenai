import { useContext } from "react"
import { BooksData } from "./BooksData"
import Book from "./Book";

export default function BooksList() {

    const {books} = useContext(BooksData);

    return (

        <div className="books">
        {
        books.map(book => <Book key={book.id} book={books}/>)
        }

        </div>
    )
}