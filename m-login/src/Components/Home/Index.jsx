import { useContext } from "react";
import TopNav from "../TopNav/TopNav";
import { Auth } from "../../Contexts/Auth";
import Gate from "../Auth/Gate";

export default function Index() {

    const {user} = useContext(Auth);

    return (
        <div>
            <TopNav />
            <h1>Home</h1>
            <div className="content">
                <p>Welcome to the home page</p>
                <p>Click on the links above to navigate</p>
                <Gate roles="user|animal"><a href={'#users/delete/' + user?.id}>Delete account</a></Gate>
            </div>
        </div>
    );
}