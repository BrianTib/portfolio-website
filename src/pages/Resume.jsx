export default function Page() {
    return (
        <section className="px-2 py-3 d-flex flex-column gap-3">
            <h2 className="text-center mt-2 fw-bold">Resume</h2>

            <div className="container text-white">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center mt-2 fw-bold">Experience</h3>
                        <ul className="list-group list-group-flush rounded">
                            <li className="list-group-item">
                                Fullstack Development Student @ Columbia
                                Engineering | 2 Months - Present
                            </li>
                            <li className="list-group-item">
                                Solo Fullstack Developer @ Fire&Grow | 1 Year -
                                Present
                            </li>
                            <li className="list-group-item">
                                Senior Software Engineer @ Fortunes | 2 Years
                            </li>
                            <li className="list-group-item">
                                Game Developer @ Toonslab | 2 years
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-12">
                        <h3 className="text-center mt-2 fw-bold">Skills</h3>
                        <ul className="list-group list-group-flush rounded">
                            <li className="list-group-item">Node.js</li>
                            <li className="list-group-item">Web Services</li>
                            <li className="list-group-item">
                                User Interface (UI)
                            </li>
                            <li className="list-group-item">Java</li>
                            <li className="list-group-item">Typescript</li>
                            <li className="list-group-item">
                                Full-Stack Development
                            </li>
                            <li className="list-group-item">Bootstrap</li>
                            <li className="list-group-item">
                                HTML, CSS, JavaScript
                            </li>
                            <li className="list-group-item">React</li>
                            <li className="list-group-item">
                                Databases (SQL, NoSQL)
                            </li>
                            <li className="list-group-item">Linux</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
