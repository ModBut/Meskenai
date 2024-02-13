import { useEffect, useState } from "react";
import {SERVER_URL} from '../Constants/main';
import axios from 'axios';
import {getAuthors} from '../Actions/authors';

export default function useAuthors(dispachAuthors) {

    const [createAuthor, setCreateAuthor] = useState(null);
    const [editAuthor, setEditAuthor] = useState(null);
    const [deleteAuthor, setDeleteAuthor] = useState(null);

    useEffect(() => {
        axios.get(`${SERVER_URL}/authors`)
            .then(res => {
                console.log(res.data);
                dispachAuthors(getAuthors(res.data));
            })
            .catch (err => {
                console.log(err);
            })

    }, [dispachAuthors]);

    useEffect(() => {
        if (null !== createAuthor) {
            axios.post(`${SERVER_URL}/authors`, createAuthor)
                .then(res => {
                    setCreateAuthor(null);
                })
                .catch(err => {
                    setCreateAuthor(null)
                });
        }
        
    }, [createAuthor]);

    // useEffect(() => {

    // })


    return {
        createAuthor, setCreateAuthor,
        editAuthor, setEditAuthor,
        deleteAuthor, setDeleteAuthor
    }
}