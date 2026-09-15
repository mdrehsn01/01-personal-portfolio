import SkillCard from "./SkillCard.tsx";
import type { IconType } from "react-icons";
import styles from "./SkillCard.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaNpm,
  FaServer,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { MdAccessibility } from "react-icons/md";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const frontendSkills: Skill[] = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
];

const toolSkills: Skill[] = [
  { name: "Git & GitHub", icon: FaGithub, color: "white" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "npm", icon: FaNpm, color: "#CB3837" },
];

const developmentSkills: Skill[] = [
  { name: "Responsive Design", icon: DiResponsive, color: "#38BDF8" },
  { name: "REST APIs", icon: FaServer, color: "#06b6d4" },
  { name: "Accessibility", icon: MdAccessibility, color: "#a78bfa" },
];

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2 className={`${styles.skillsTitle} text-center fw-bold mb-3`}>
          My Skills
        </h2>

        <h3 className={styles.skillCategory}>Frontend</h3>

        <div className="row g-4">
          {frontendSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>

        <h3 className={styles.skillCategory}>Tools & Workflow</h3>

        <div className="row g-4">
          {toolSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>

        <h3 className={styles.skillCategory}>Development</h3>

        <div className="row g-4">
          {developmentSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
