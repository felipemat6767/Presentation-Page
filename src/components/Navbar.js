//import Logo from "../img/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Logo from "../img/Logo2.jpg"
const element = <FontAwesomeIcon icon={faFaceAngry} />
const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span>Logo</span>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-end">
              <i><span className="fab fa-facebook" title="icono"></span></i>
              <i><span  className="fab fa-youtube" title="icono"></span></i>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link navbartext" aria-current="page" href="/">Home</a>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle navbartext" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/">Visit PageA</a></li>
                    <li><a class="dropdown-item" href="/">Visit PageA</a></li>
                  </ul>
                </li>
                <Link className="nav-link navbartext" to="/Contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
