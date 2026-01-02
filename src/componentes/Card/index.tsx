import type { ReactNode } from "react";
import styles from "./style.module.css";
import { GrLinkNext } from "react-icons/gr";

interface CardProps {
  titulo: string;
  conteudo: ReactNode;
  tecnologia: ReactNode;
  link: string;
}

const Card = ({titulo, conteudo, tecnologia, link}:CardProps) => {
    return (
        <div className={styles.containerCard}>
            <div className={styles.containerCardFilho}>
                <header className={styles.titulo}>
                    <div>
                        <h3>{titulo}</h3> 
                    </div>
                    <div>
                        <a href={link} target="_blank" className={styles.iconLink}>
                            <GrLinkNext />
                        </a>
                    </div>
                </header>
                <section className={styles.conteudo}>{conteudo}</section>
                <footer className={styles.tecnologia}>{tecnologia}</footer>
            </div>
        </div>
    )
}

export default Card