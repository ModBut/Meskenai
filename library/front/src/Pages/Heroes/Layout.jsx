import Nav from "../../Components/Nav";
import Create from "./Create";

export default function Layout() {
    return (
        <>
        <Nav />
            <div className="container text-center">
                <div className="row">
                    <div className="col-4 mt-4">
                        <h1>Heroes</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-4">
                        <Create/>
                    </div>
                    <div className="col-8 mt-4">
                        
                    </div>
                </div>
            </div>
           
        </>
        
    )
}