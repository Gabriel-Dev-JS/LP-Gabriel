import Card from "../../componentes/Card"
import styles from "./style.module.css"

const Projetos = () => {
    return(
        <div className={styles.containerProjeto}>
            <Card children={<p>teste 1</p>}/>
            <Card children={<p>teste 2</p>}/>
            <Card children={<p>teste 3</p>}/>
        </div>
    )
}

export default Projetos