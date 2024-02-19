import { useEffect, useState } from "react";
import {SERVER_URL} from '../Constants/main';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import * as a from '../Actions/authors';

export default function useAuthors(dispachAuthors) {

    const [storeAuthor, setStoreAuthor] = useState(null);
    const [updateAuthor, setUpdateAuthor] = useState(null);
    const [destroyAuthor, setDestroyAuthor] = useState(null);

    useEffect(() => {
        axios.get(`${SERVER_URL}/authors`)
            .then(res => {
                dispachAuthors(a.getAuthors(res.data));
            })
            .catch (err => {
                console.log(err);
            })

    }, [dispachAuthors]);

    useEffect(() => {
        if (null !== storeAuthor) {
            const uuid = uuidv4();
            dispachAuthors(a.createAuthorAsTemp({...storeAuthor, id: uuid}))
            axios.post(`${SERVER_URL}/authors`, {...storeAuthor, id: uuid})
                .then(res => {
                    setStoreAuthor(null);
                    dispachAuthors(a.createAuthorReal(res.data));
                })
                .catch(() => {
                    dispachAuthors(a.createAuthorUndo({...storeAuthor, id: uuid}));
                    setStoreAuthor(null);
                });
        }
        
    }, [storeAuthor, dispachAuthors]);

    useEffect(() => {
        if (null !== updateAuthor) {
            dispachAuthors(a.editAuthorAsTemp(updateAuthor));
            axios.put(`${SERVER_URL}/authors/${updateAuthor.id}`, updateAuthor)
                .then(res => {
                    setUpdateAuthor(null);
                    dispachAuthors(a.editAuthorAsReal(res.data));
                })
                .catch(() => {
                    setUpdateAuthor(null);
                    dispachAuthors(a.editAuthorAsUndo(updateAuthor));
                })
        }
    }, [updateAuthor, dispachAuthors]);

    useEffect(_ => {
        if (null !== destroyAuthor) {
            dispachAuthors(a.deleteAuthorAsTemp(destroyAuthor));
            axios.delete(`${SERVER_URL}/authors/${destroyAuthor.id}`)
                .then(res => {
                    setDestroyAuthor(null);
                    dispachAuthors(a.deleteAuthorAsReal(res.data));
                })
                .catch(() => {
                    dispachAuthors(a.deleteAuthorUndo(destroyAuthor));
                    setDestroyAuthor(null);
                });
        }
    }, [destroyAuthor, dispachAuthors]);


    return {
        storeAuthor, setStoreAuthor,
        updateAuthor, setUpdateAuthor,
        destroyAuthor, setDestroyAuthor
    }
}