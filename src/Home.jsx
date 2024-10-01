import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons
import Portfolio from "./assets/Portfolio.jpg";

function Home() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6 text-left">
                    <h1>Hi! I'm Ajithkumar,</h1>
                    <p>
                        a MERN Stack Developer passionate about building dynamic web
                        applications.
                    </p>
                    <p>
                        With experience in creating full-stack projects, I love solving
                        real-world problems using technology.
                    </p>

                    <div className="social-icons mt-4">
                        <a
                            href="https://www.linkedin.com/in/ajithkumar-d-322991114/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-3"
                            style={{ color: 'black' }}
                        >
                            <FaLinkedin size={25} />
                        </a>
                        <a
                            href="https://github.com/Ajithduraisamy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-3"
                            style={{ color: 'black' }}
                        >
                            <FaGithub size={25} />
                        </a>
                    </div>

                    <Link to="/projects" className="btn btn-dark mt-4">
                        View My Work
                    </Link>
                </div>

                <div className="col-md-6 text-center">
                    <img
                        src={Portfolio}
                        alt="Portfolio Image"
                        className="img-fluid rounded-circle"
                        style={{ maxWidth: "75%", height: "auto" }} // Set width and height for a perfect circle
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;