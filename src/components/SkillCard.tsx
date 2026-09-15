import type { IconType } from "react-icons";
import styles from "./SkillCard.module.css";

interface SkillCardProps {
  name: string;
  icon: IconType;
  color: string;
}

function SkillCard({ name, icon: Icon, color }: SkillCardProps) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className={`${styles.card} h-100`}>
        <div className="card-body text-center d-flex  align-items-center justify-content-center gap-3">
          <Icon className="fs-2" style={{color}} />
          <div className="fw-bold fs-5">{name}</div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
