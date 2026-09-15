import styles from "./About.module.css";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section id="about" className={`${styles.aboutSection} py-5`}>
      <div className="container">
        <h2 className={`${styles.aboutTitle} text-center mb-5`}>About Me</h2>

        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div
              className={`${styles.developerCard}  text-center p-4 shadow rounded-4`}
            >
              <div className={styles.codeIcon}>&lt;/&gt;</div>
              <h3 className="mt-3">Frontend Developer</h3>
              <p>React • TypeScript • Bootstrap</p>
            </div>
          </div>
          <div className="col-lg-7">
            <h3 className="mb-3 fw-bold">Who I Am</h3>
            <p className="lead">
              I'm a Frontend Developer focused on building modern, responsive,
              and user-friendly web applications with React and TypeScript.
            </p>
            <p>
              I enjoy turning ideas into clean and intuitive interfaces while
              focusing on performance, usability, and responsive design. I'm
              continuously learning and improving my skills by building
              real-world projects.
            </p>

            <div>
              <p className="d-flex align-items-center gap-2 mb-2">
                <FaCheckCircle />
                Responsive & Mobile-First Development
              </p>

              <p className="d-flex align-items-center gap-2 mb-2">
                <FaCheckCircle />
                Modern UI & User Experience
              </p>
              <p className="d-flex align-items-center gap-2 mb-2">
                <FaCheckCircle />
                React & TypeScript Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
