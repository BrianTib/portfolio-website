export default function Page() {
    return (
        <section className="px-2 py-3">
            <h2 className="text-center mt-2 fw-bold">About me</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-3">
                        <div className="card border-white shadow-sm">
                            <div className="card-header bg-white text-black fw-bold">
                                Full-Stack Developer
                            </div>
                            <div className="card-body">
                                I am a full-stack developer with a passion for
                                creating beautiful and functional web
                                applications. I have experience working with
                                JavaScript, React, Node.js, Express, and
                                MongoDB.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3">
                        <div className="card border-secondary shadow-sm">
                            <div className="card-header bg-secondary text-black fw-bold">
                                Additional Experience
                            </div>
                            <div className="card-body">
                                I also have experience outside of web
                                development, including working with Rust,
                                Python, Java, and some of the C languages. I am
                                always looking to learn new technologies and
                                improve my skills.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3">
                        <div className="card border-secondary shadow-sm">
                            <div className="card-header bg-secondary text-white fw-bold">
                                Background
                            </div>
                            <div className="card-body">
                                I was initially self-taught and then attended
                                Columbia&apos;s Engineering Bootcamp. I am
                                currently working on personal projects and
                                looking for new opportunities to grow as a
                                developer.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
