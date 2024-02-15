import { useEffect, useState } from "react";
import {SERVER_URL} from '../Constants/main';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {deleteAuthorAsReal, deleteAuthorAsTemp, getAuthors, storeAuthorAsTemp, storeAuthorReal} from '../Actions/authors';

export default function useAuthors(dispachAuthors) {

    const [storeAuthor, setStoreAuthor] = useState(null);
    const [updateAuthor, setUpdateAuthor] = useState(null);
    const [destroyAuthor, setDestroyAuthor] = useState(null);

    useEffect(() => {
        axios.get(`${SERVER_URL}/authors`)
            .then(res => {
                dispachAuthors(getAuthors(res.data));
            })
            .catch (err => {
                console.log(err);
            })

    }, [dispachAuthors]);

    useEffect(() => {
        if (null !== storeAuthor) {
            const uuid = uuidv4();
            dispachAuthors(storeAuthorAsTemp({...storeAuthor, id: uuid}))
            axios.post(`${SERVER_URL}/authors`, {...storeAuthor, id: uuid})
                .then(res => {
                    setStoreAuthor(null);
                    dispachAuthors(storeAuthorReal(res.data));
                })
                .catch(() => {
                    setStoreAuthor(null);
                });
        }
        
    }, [storeAuthor, dispachAuthors]);

    useEffect(_ => {
        if (null !== destroyAuthor) {
            dispachAuthors(deleteAuthorAsTemp(destroyAuthor));
            axios.delete(`${SERVER_URL}/authors/${destroyAuthor.id}`)
                .then(res => {
                    setDestroyAuthor(null);
                    dispachAuthors(deleteAuthorAsReal(res.data));
                })
                .catch(() => {
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