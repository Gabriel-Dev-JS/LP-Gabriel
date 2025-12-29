import styles from "./style.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Curriculo</li>
                <li>Contato</li>
            </ul>
        </div>
    )
}

export default Header