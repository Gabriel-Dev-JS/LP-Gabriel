import avatar from "../../images/Avatar-Gabriel-Fundo-Branco.png"
import tag from "../../images/chaves-html.png"
import styles from "./style.module.css"

const Apresentacao:React.FC = () => {
    return (
        <div className={styles.Apresentacao} id="sobre">
            <div className={styles.sobre}>
                <div className={styles.titulo}><p>Seja bem vindo</p> <img className={styles.tag} src={tag}/></div>
                <div className={styles.containerTexto}>
                    <p className={styles.texto}>Me chamo Gabriel, sou formado em Análise e Desenvolvimento de Sistemas e atuo há mais de dois anos com desenvolvimento de software</p>
                </div>
            </div>
            <div className={styles.avatar}>
                <img className={styles.avatar} src={avatar}/>
            </div>
        </div>
    )
}

export default Apresentacao