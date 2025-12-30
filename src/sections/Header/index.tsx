import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import styles from "./style.module.css";

const Header = () => {

    const scroll = (ids:string) => {
        const idsConteudo = document.querySelector(`${ids}`)
        idsConteudo?.scrollIntoView({
            behavior:"smooth"
        })

    }

    return (
        <div className={styles.header}>
            <div>
                <ul>
                    <li onClick={()=> scroll("#sobre")}>Sobre</li>
                    <li onClick={()=> scroll("#projetos")}>Projetos</li>
                    <li onClick={()=> scroll("#curriculo")}>Curriculo</li>
                    <li onClick={()=> scroll("#contato")}>Contato</li>
                </ul>
            </div>
            <div className={styles.containerIcone}>
                <a href="https://github.com/Gabriel-Dev-JS" target="_blank">
                    <FaGithubSquare className={styles.icones}/>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-oliveira-7a7524219/" target="_blank">
                    <CiLinkedin className={styles.icones}/>
                </a>
            </div>
        </div>
    )
}

export default Header