import styles from "./Navbar.module.css";

interface NavbarProps {
  name: string;
}
function Navbar({ name }: NavbarProps) {
  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-lg sticky-top shadow-sm`}
    >
      <div className="container">
        <a className={`${styles.brand}  navbar-brand`} href="#">
          {name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`${styles.navLink}  nav-link`} href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink} nav-link`} href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink} nav-link`} href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink} nav-link`} href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink} nav-link`} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
