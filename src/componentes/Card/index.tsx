import type { ReactNode } from "react";
import styles from "./style.module.css";

interface CardProps {
  titulo: string;
  conteudo: ReactNode;
  tecnologia: ReactNode;
}

const Card = ({titulo, conteudo, tecnologia}:CardProps) => {
    return (
        <div className={styles.containerCard}>
            <header className={styles.titulo}><h3>{titulo}</h3></header>
            <section className={styles.conteudo}>{conteudo}</section>
            <footer className={styles.tecnologia}>{tecnologia}</footer>
        </div>
    )
}

export default Card