import { createContext, useReducer, useState } from "react";
import heroesReducer from '../Reducers/heroesReduser';
import useHeroes from "../Hooks/useHeroes";

export const Heroes = createContext();

export const HeroesProvider = ({children}) => {

    const [heroes, dispachHeroes] = useReducer(heroesReducer, []);
    const [deleteHeroe, setDeleteHeroe] = useState(null);
    const [editHeroe, setEditHeroe] = useState(null);

    const {storeHeroe, setStoreHeroe, updateHeroe, setUpdateHeroe, destroyHeroe, setDestroyHeroe} = useHeroes(dispachHeroes);

    return (
        <Heroes.Provider value={{
            heroes, dispachHeroes,
            deleteHeroe, setDeleteHeroe,
            editHeroe, setEditHeroe,
            storeHeroe, setStoreHeroe,
            updateHeroe, setUpdateHeroe,
            destroyHeroe, setDestroyHeroe
        }}>
            {children}
        </Heroes.Provider>
    )
}