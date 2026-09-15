import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

function ProjectCard({
  title,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className={`${styles.card} h-100`}>
        <img src={image} alt={title} className={styles.projectImage} />
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.technologies}>
            {technologies.map((tech) => (
              <span className={styles.techBadge} key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <div className={styles.projectLinks}>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
