import Link from "./Link";

export default function Nav() {

    return (
        <nav className="navbar">
            <a className="navbar-brand" href="#home">Home Base</a>
            <div className="navbar-nav">
                <Link href="#animals">Animals</Link>
                <Link href="#about">About Zoo</Link>
                <Link href="#contact">Animals</Link>
            </div>
        </nav>
    );
}