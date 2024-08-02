import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between px-5 py-2 items-center bg-sky-600 text-white">
            <Link to="/">
                <h1 className="font-bold text-lg">Brian&apos;s Portfolio</h1>
            </Link>
            <ul className="flex gap-4">
                <li>
                    <Link to="/about-me">About Me</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
        </nav>
    );
}
