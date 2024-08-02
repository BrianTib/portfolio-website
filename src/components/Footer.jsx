export default function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-white">
            <div className="container text-center">
                <ul className="list-unstyled d-flex gap-2 justify-content-center">
                    <li>
                        <a
                            href="https://github.com/BrianTib"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:bptiburcio@gmail.com"
                            className="text-white">
                            Email
                        </a>
                    </li>
                </ul>
                <div className="row">
                    <div className="col-12">
                        <small>Made with 💗 using React</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}
