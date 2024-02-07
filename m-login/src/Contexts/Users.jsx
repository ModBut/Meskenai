import { createContext } from "react";
import useUsers from "../Hooks/useUsers";

export const Users = createContext();

export const UsersProvider = ({children}) => {

    const { users, setUsers,
        createUsers,
        setCreateUser,
        editUser,
        setEditUsers,
        deleteUsers,
        setDeleteUsers,
        } = useUsers();

    return (
        <Users.Provider value={{
            users, setUsers,
            createUsers,
            setCreateUser,
            editUser,
            setEditUsers,
            deleteUsers,
            setDeleteUsers,
            }}>
                {children}
        </Users.Provider>
    )
}