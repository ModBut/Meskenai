import { useContext } from 'react';
import Nav from '../../Components/Nav';
import Create from './Create';
import Delete from './Delete';
import List from './List';
import { Books } from '../../Contexts/Books';
import Edit from './Edit';

export default function Layout() {

    const { editBook } = useContext(Books);

    return (
        <>
        <Nav />
            <div className="container text-center">
                <div className="row">
                    <div className="col-4 mt-4">
                        <h1>Books</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-4">
                        <Create/>
                    </div>
                    <div className="col-8 mt-4">
                        <List/>
                    </div>
                </div>
            </div>
            <Delete/>
            {
                editBook && <Edit/>
            }
        </>
    )
}