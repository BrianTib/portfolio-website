export default function Page() {
    return (
        <section className="container py-5">
            <h1 className="text-center mb-5 fw-bold">Resume</h1>

            <div className="text-center mb-5">
                <a
                    href="/src/assets/resume.pdf"
                    className="btn btn-primary"
                    download>
                    Download Resume
                </a>
            </div>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">
                                Experience
                            </h2>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h5 className="mb-1">
                                        Fullstack Development Student
                                    </h5>
                                    <p className="mb-1">Columbia Engineering</p>
                                    <small className="text-muted">
                                        2 Months - Present
                                    </small>
                                </li>
                                <li className="list-group-item">
                                    <h5 className="mb-1">
                                        Solo Fullstack Developer
                                    </h5>
                                    <p className="mb-1">Fire&Grow</p>
                                    <small className="text-muted">
                                        1 Year - Present
                                    </small>
                                </li>
                                <li className="list-group-item">
                                    <h5 className="mb-1">
                                        Senior Software Engineer
                                    </h5>
                                    <p className="mb-1">Fortunes</p>
                                    <small className="text-muted">
                                        2 Years
                                    </small>
                                </li>
                                <li className="list-group-item">
                                    <h5 className="mb-1">Game Developer</h5>
                                    <p className="mb-1">Toonslab</p>
                                    <small className="text-muted">
                                        2 Years
                                    </small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">
                                Skills
                            </h2>
                            <div className="d-flex flex-wrap justify-content-center">
                                {[
                                    "Node.js",
                                    "Web Services",
                                    "User Interface (UI)",
                                    "Java",
                                    "TypeScript",
                                    "Full-Stack Development",
                                    "Bootstrap",
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "React",
                                    "Databases (SQL, NoSQL)",
                                    "Linux",
                                ].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="badge bg-primary m-1 p-2">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
