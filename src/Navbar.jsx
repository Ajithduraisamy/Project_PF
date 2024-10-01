import { Link } from "react-router-dom"
import { SiHomebridge } from "react-icons/si";
function Navbar() {
    return (
        <>
            <div className="container my-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3">
                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/"><SiHomebridge size={25} /> <b>Ak</b></Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/skills">Skills</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/projects">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar