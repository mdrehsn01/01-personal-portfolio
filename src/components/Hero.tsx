import profileImage from "../assets/profile.jpg";
import styles from "./Hero.module.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div
      id="home"
      className={`${styles.hero} min-vh-100 d-flex align-items-center`}
    >
      <div className="container">
        <div className="row align-items-center w-100">
          <div className="col-lg-7">
            <h1 className={`${styles.heroTitle} display-5 fw-bold`}>
              Hi, I'm Mohammad Rehan
            </h1>

            <h2 className={`${styles.heroSubtitle} display-6 fw-bold`}>
              Frontend Developer | React & TypeScript
            </h2>

            <p className={`${styles.heroDescription} lead mb-4`}>
              I build modern, responsive and user-focused web applications using
              React, TypeScript and modern frontend technologies.
            </p>

            <div className="d-grid gap-2 d-sm-flex">
              <a
                href="#projects"
                className={`${styles.heroButton1} btn btn-lg px-4`}
              >
                View My Projects
              </a>

              <a
                href="/resume.pdf"
                className={`${styles.heroButton2} btn btn-lg px-3`}
              >
                Download Resume
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/mdrehsn01"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/mohammadrehan001"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center">
            <img
              src={profileImage}
              alt="Mohammad Rehan"
              className={`${styles.profileImage} img-fluid`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
