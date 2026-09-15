import ProjectCard from "./ProjectCard.tsx";
import styles from "./ProjectCard.module.css";
import portfolioImage from "../assets/portfolio.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A modern and responsive personal portfolio website showcasing my skills, projects, and frontend development journey.",
    technologies: ["React", "TypeScript", "Bootstrap", "CSS"],
    image: portfolioImage,
    liveUrl: "",
    githubUrl: "https://github.com/mdrehsn01/01-personal-portfolio",
  },
];
function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className={`${styles.projectsTitle} text-center`}> My Projects</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
