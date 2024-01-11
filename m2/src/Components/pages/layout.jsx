import Animals from "./Animals"
import Contact from "./Contacts"
import Home from "./Home"
import About from "./About"
import Loading from "./loading"
import Page404 from "./Page404"
import { useEffect, useState } from "react"

export default function Layout() {

    const [path, setPath] = useState(null);
    // const [params, setParams] = useState([]);

    useEffect(_ => {

        const hash = window.location.hash.split('/');
        setPath(hash.shift() || '#home');
        // setParams(hash);

        const onHashChange = _ => {
            const hash = window.location.hash.split('/');
            setPath(hash.shift() || '#home');
            // setParams(hash);
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
        <>
            {
                routes.find(route => route.path === path)?.component || <Page404 />
            }
        </>
    )
}