import { BooksDataProvider } from './Components/Books/BooksData';
import BooksList from './Components/Books/BooksList';
import './books.scss';


export default function App() {
    return (
        <BooksDataProvider>
           <section>
            <div className='container'>
                <BooksList/>
            </div>
           </section>
        </BooksDataProvider>
    );
}