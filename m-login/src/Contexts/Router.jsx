import { createContext } from "react";

export const Router = createContext();

export const RouterProvider = ({children}) => {
    const routes = [
    ]

    return (
        <RouterProvider value={routes}>
            {children}
        </RouterProvider>
    )
}