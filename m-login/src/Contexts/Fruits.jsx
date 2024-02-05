import { createContext } from "react";
import useFruits from "../Hooks/useFruits";

export const Fruits = createContext();

export const FruitsProvider = ({children}) => {

    const { fruits, setFruits, filteredFruits,
        createFruit,
        setCreateFruit,
        editFruit,
        setEditFruit,
        deleteFruit,
        setDeleteFruit,
        filterForm,
        setFilterForm,} = useFruits();

    return (
        <Fruits.Provider value={{
            fruits, setFruits, filteredFruits,
        createFruit,
        setCreateFruit,
        editFruit,
        setEditFruit,
        deleteFruit,
        setDeleteFruit,
        setFilterForm,
        filterForm
            }}>
                {children}
        </Fruits.Provider>
    )
}