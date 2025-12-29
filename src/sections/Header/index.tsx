import { FaGithubSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import styles from "./style.module.css"

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
                <FaGithubSquare className={styles.icones}/>
                <CiLinkedin className={styles.icones}/>
            </div>
        </div>
    )
}

export default Header