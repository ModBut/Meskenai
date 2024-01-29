import { createContext, useEffect, useState } from "react";
import HomeIndex from '../Components/Home/Index';
import FruitsIndex from '../Components/Fruits/Index';
import Login from "../Components/Auth/Login";
import Page404 from "../Components/Page404";

export const Router = createContext();

export const RouterProvider = ({children}) => {

    const [route, setRoute] = useState(() => {
       const hash = window.location.hash || '#home';
       return hash.split('/').shift();
    })
    const [params, setParams] = useState(() => {
        const hash = window.location.hash.split('/');
        hash.shift();
        return hash;
    });

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.split('/');
            setRoute(hash.shift());
            setParams(hash);
        }
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const routes = [
        {path: '#home', component: <HomeIndex />},
        {path: '#fruits', component: <FruitsIndex />},
        {path: '#login', component: <Login/>},
    ];

    const routeComponent = routes.find(r => r.path === route)?.component || <Page404 />;

    return (
        <Router.Provider value={params}>
            {routeComponent}
        </Router.Provider>
    )
}