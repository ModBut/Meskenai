import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../Constants/main';
import { Auth } from '../Contexts/Auth';

export default function useFruits() {
    const [fruits, setFruits] = useState([]);
    const [createFruit, setCreateFruit] = useState(null);
    const [editFruit, setEditFruit] = useState(null);
    const [deleteFruit, setDeleteFruit] = useState(null);
    const [filterForm, setFilterForm] = useState('all');

    const { user, logout } = useContext(Auth);

    useEffect(_ => {
        const withTokenUrl = 
        user ? `${SERVER_URL}/fruits?token=${user.token}` : `${SERVER_URL}/fruits`;

        axios.get(withTokenUrl)
            .then(res => {
                setFruits(res.data.map((fruit, i) => ({...fruit, row : i, show: new Set()})));
                console.log(res.data);
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 401) {
                        logout();
                    }
                }
                console.log(err);
            });
    }, []);
    
    useEffect(_ => {
        if (null !== createFruit) {
            axios.post(`${SERVER_URL}/fruits`, createFruit)
                .then(res => {
                    setCreateFruit(null);
                    console.log(res.data);
                    setFruits(f => f.map(fruit => fruit.id === res.data.uuid ? {...fruit, id: res.data.id, temp: false} : fruit));
                      
                    
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [createFruit]);

    useEffect(_ => {
        if (null !== editFruit) {
            axios.put(`${SERVER_URL}/fruits/${editFruit.id}`, editFruit)
                .then(res => {
                    setEditFruit(null);
                    console.log(res.data);
                    setFruits(f => f.map(fruit => fruit.id === res.data.id ? {...fruit, temp: false} : fruit));
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [editFruit]);

    const filteredFruits = fruits.filter(fruit => filterForm === 'all' || fruit.form === filterForm);
    
    return {
        
        fruits: filteredFruits,
        setFruits,
        createFruit,
        setCreateFruit,
        editFruit,
        setEditFruit,
        deleteFruit,
        setDeleteFruit,
        setFilterForm,
        filterForm 
    };
}