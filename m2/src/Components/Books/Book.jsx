export default function Book({book}) {
    return (
        <div className="books">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
        </div>
    )
}