import { useEffect, useState } from "react";
import axios from 'axios';
import { SERVER_URL } from '../Constants/main';

export default function useAuthorsDropdown() {

    const [authorsDropdown, setAuthorDropdown] = useState(null);

    useEffect(() => {
        axios.get(`${SERVER_URL}/authors`)
            .then(res => {
                setAuthorDropdown(res.data);
            })
            .catch (err => {
                console.log(err);
            })

    }, []);

    return {authorsDropdown};
}