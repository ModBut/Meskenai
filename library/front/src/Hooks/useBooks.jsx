import { useEffect, useState } from "react";
import {SERVER_URL} from '../Constants/main';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import * as b from '../Actions/books';



export default function useBooks(dispachBooks) {

    const [storeBook, setStoreBook] = useState(null);
    const [updateBook, setUpdateBook] = useState(null);
    const [destroyBook, setDestroyBook] = useState(null);

    useEffect(() => {
        axios.get(`${SERVER_URL}/books`)
            .then(res => {
                dispachBooks(b.getBooks(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }, [dispachBooks]);

    useEffect(() => {
        if (null !== storeBook) {
            const uuid = uuidv4();
            dispachBooks(b.createBookAsTemp({...storeBook, id: uuid}))
            axios.post(`${SERVER_URL}/books`, {...storeBook, id: uuid})
                .then(res => {
                    setStoreBook(null);
                    dispachBooks(b.createBookAsReal(res.data));
                })
                .catch(() => {
                    dispachBooks(b.createBookAsUndo({...setStoreBook, id: uuid}));
                })
        }
}, [storeBook, dispachBooks]);

    useEffect(() => {
        if (null !== updateBook) {
            dispachBooks(b.editBookAsTemp(updateBook));
            axios.put(`${SERVER_URL}/books/${updateBook.id}`, updateBook)
                .then(res => {
                    setUpdateBook(null);
                    dispachBooks(b.editBookAsReal(res.data));
                })
                .catch(() => {
                    setUpdateBook(null);
                    dispachBooks(b.editBookAsUndo(updateBook));
                })
        }
    }, [updateBook, dispachBooks]);

    useEffect(() => {
        if (null !== destroyBook) {
            dispachBooks(b.deleteBookAsTemp(destroyBook));
            axios.delete(`${SERVER_URL}/books/${destroyBook.id}`)
                .then(res => {
                    setDestroyBook(null);
                    dispachBooks(b.deleteBookAsReal(res.data));
                })
                .catch(() => {
                    dispachBooks(b.deleteBookAsUndo(destroyBook));
                    setDestroyBook(null);
                })
        }
}, [destroyBook, dispachBooks])



    return {
        storeBook, setStoreBook,
        updateBook, setUpdateBook,
        destroyBook, setDestroyBook,
    };
}