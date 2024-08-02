import { Link, useLocation } from "react-router-dom";

function LinkItem({ to, text, isActive }) {
    const active = isActive(to);

    return (
        <li className="nav-item">
            <Link
                className={`nav-link ${
                    active ? "active text-white" : "text-secondary"
                }`}
                to={to}>
                {text}
            </Link>
        </li>
    );
}

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">
                    <strong>Brian&apos;s Portfolio</strong>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <svg
                            className="w-10 h-10"
                            style={{ width: "1.5em", height: "1.5em" }}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14">
                            <path
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <LinkItem to="/" text="About Me" isActive={isActive} />
                        <LinkItem
                            to="/portfolio"
                            text="Portfolio"
                            isActive={isActive}
                        />
                        <LinkItem
                            to="/contact"
                            text="Contact"
                            isActive={isActive}
                        />
                        <LinkItem
                            to="/resume"
                            text="Resume"
                            isActive={isActive}
                        />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
