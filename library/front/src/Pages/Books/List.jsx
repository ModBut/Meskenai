import { useContext } from "react"
import { Books } from "../../Contexts/Books"
import useAuthorsDropdown from "../../Hooks/useAuthorsDropdown";

export default function List() {

    const { books, setDeleteBook, setEditBook } = useContext(Books);

    const { authorsDropdown } = useAuthorsDropdown();

    return (
        <>
        {
            books.map(book => (
                <div key={book.id}>
                    {
                        book.deleted
                            ?
                    <div className="alert alert-danger mt-2" role="alert">
                        {book.title} was deleted
                    </div>
                        :
                    <div className="card mt-2" style={{
                        opacity: book.temp ? 0.5 : 1
                    }}>
                        <div className="card-header">
                            <h4>{book.title}</h4>
                        </div>
                        <div className="card-body">
                            <p>Total pages: {book.pages}</p>
                            <p>Book's genre: {book.genre}</p>
                            {/* <p>Book's author: {book.author_id}</p> */}
                            {authorsDropdown &&
                                 authorsDropdown.map(author => {
                                    return author.id === book.author_id ? <p key={author.id}>Book's author: {author.name} {author.surname}</p> : null
                                })
                            }
                        </div>
                        <div className="card-footer">
                            <button
                            type="button"
                            disabled={book.temp ? true : false}
                            className="btn btn-danger m-2" 
                            onClick={() => setDeleteBook(book)}
                            >
                                Delete Book
                            </button>
                            <button
                            type="button"
                            disabled={book.temp ? true : false}
                            className="btn btn-success m-2" 
                            onClick={() => setEditBook(book)}
                            >
                                Edit Book
                            </button>
                        </div>
                    </div>
                }
                </div>
            ))
        }
        </>
    )
}