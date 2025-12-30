import type { ReactNode } from "react";
import styles from "./style.module.css";

interface CardProps {
  titulo: string;
  conteudo: ReactNode;
}

const Card = ({titulo, conteudo}:CardProps) => {
    return (
        <div className={styles.containerCard}>
            <div className={styles.titulo}>{titulo}</div>
            <div className={styles.conteudo}>{conteudo}</div>
        </div>
    )
}

export default Card