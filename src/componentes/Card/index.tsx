import type { ReactNode } from "react";
import styles from "./style.module.css";

interface CardProps {
  image?: string;              
  icon?: ReactNode;          
//   icon: ElementType;          
  children: ReactNode;    
}

const Card = ({children, icon, image}:CardProps) => {
    return (
        <div className={styles.containerCard}>
            <div>{image}</div>
            <div>{icon}</div>
            <div>{children}</div>
        </div>
    )
}

export default Card