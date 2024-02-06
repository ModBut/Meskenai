import { createContext, useEffect, useState } from "react";
import HomeIndex from '../Components/Home/Index';
import FruitsIndex from '../Components/Fruits/Index';
import Login from "../Components/Auth/Login";
import Page404 from "../Components/Page404";
import Page401 from "../Components/Page401";

export const Router = createContext();

export const RouterProvider = ({ children }) => {

    const page401 = <Page401 />;

    const [route, setRoute] = useState(_ => {
        const hash = window.location.hash || '#home';
        return hash.split('/').shift();
    });
    const [params, setParams] = useState(_ => {
        const hash = window.location.hash.split('/');
        hash.shift();
        return hash;
    });

    const [notAuthorized, setNotAuthorized] = useState(null);

    const show401Page = _ => {
        setNotAuthorized(page401);
    }

    useEffect (_ => {
        setNotAuthorized(null);
    }, [route, setNotAuthorized]);


    useEffect(() => {
        const handleHashChange = _ => {
            const hash = window.location.hash.split('/');
            setRoute(hash.shift());
            setParams(hash);
        }
        window.addEventListener('hashchange', handleHashChange);
        return _ => window.removeEventListener('hashchange', handleHashChange);
    }, []);


    const routes = [
        { path: '#home', component: <HomeIndex /> },
        { path: '#fruits', component: <FruitsIndex /> },
        { path: '#login', component: <Login />}

    ];

    const routeComponent = routes.find(r => r.path === route)?.component || <Page404 />;

    return (
        <Router.Provider value={{params, show401Page}}>
            {notAuthorized ?? routeComponent}
        </Router.Provider>
    );
}