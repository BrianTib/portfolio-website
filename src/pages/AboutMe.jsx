import { Link } from "react-router-dom";

export default function Page() {
    return (
        <section className="container py-5">
            <h1 className="text-center mb-5 fw-bold">About Me</h1>
            <div className="row justify-content-center align-items-center mb-5">
                <div className="col-md-4 mb-4 mb-md-0">
                    <img
                        src="https://avatars.githubusercontent.com/u/102501603?v=4"
                        alt="Brian's Avatar"
                        className="img-fluid rounded-circle shadow-lg"
                    />
                </div>
                <div className="col-md-8">
                    <h2 className="mb-3">Hello, I&apos;m Brian Tiburcio</h2>
                    <p className="lead mb-4">
                        I&apos;m a passionate full-stack developer with a knack
                        for creating beautiful and functional web applications.
                        With a strong foundation in modern web technologies and
                        a diverse background in various programming languages,
                        I&apos;m always eager to take on new challenges and push
                        the boundaries of what&apos;s possible in software
                        development.
                    </p>
                    <Link to="/resume" className="btn btn-primary btn-lg">
                        Download Resume
                    </Link>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h3 className="card-title mb-3 text-primary">
                                <i className="bi bi-code-slash me-2"></i>
                                Full-Stack Development
                            </h3>
                            <p className="card-text">
                                Experienced in JavaScript, React, Node.js,
                                Express, and MongoDB. I specialize in creating
                                responsive and user-friendly web applications
                                that deliver exceptional user experiences.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h3 className="card-title mb-3 text-success">
                                <i className="bi bi-gear me-2"></i>Additional
                                Skills
                            </h3>
                            <p className="card-text">
                                Proficient in Rust, Python, Java, and C
                                languages. Always eager to learn new
                                technologies and apply them to solve complex
                                problems efficiently.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h3 className="card-title mb-3 text-info">
                                <i className="bi bi-book me-2"></i>Background
                            </h3>
                            <p className="card-text">
                                Self-taught developer who further honed skills
                                at Columbia&apos;s Engineering Bootcamp.
                                Currently working on personal projects and
                                seeking new opportunities to grow and contribute
                                as a developer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
