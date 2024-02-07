import { useContext } from "react";
import { Router } from "../../Contexts/Router";
import Page404 from "../Page404";
import { UsersProvider } from "../../Contexts/Users";
import Register from "./Register";

export default function Index({ to }) {

    const { params } = useContext(Router);

    let returnComponent = <Page404 />;

    if (to === 'register') {
        returnComponent = <Register/>
    }

    return (
        <UsersProvider>
            {returnComponent}
        </UsersProvider>
    );
}