import Animals from "./Animals";
import Contact from "./Contacts";
import Home from "./Home";
import About from "./About";
import Loading from "./loading";
import Page404 from "./Page404";
import { useEffect, useState, createContext } from "react";

export const ParameterContext = createContext()

export default function Layout() {

    const [path, setPath] = useState(null);
    const [params, setParams] = useState([]);

    useEffect(_ => {

        const hash = window.location.hash.split('/');
        setPath(hash.shift() || '#home');
        setParams(hash);

        const onHashChange = _ => {
            const hash = window.location.hash.split('/');
            setPath(hash.shift() || '#home');
            setParams(hash);
        }

        window.addEventListener('hashchange', onHashChange);
        return _ => {
            window.removeEventListener('hashchange', onHashChange);
        }

    }, [ setPath]);

    const routes = [
        { path: "#home", component: <Home /> },
        { path: "#animals", component: <Animals /> },
        { path: '#about', component: <About /> },
        { path: '#contact', component: <Contact /> },
        { path: null, component: <Loading /> },
    ];

    return (
        <ParameterContext.Provider value={{
            params, 
            path,
        }}>
            {
                routes.find(route => route.path === path)?.component || <Page404 />
            }
        </ParameterContext.Provider>
    )
}