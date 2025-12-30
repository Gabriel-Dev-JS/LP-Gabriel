import Card from "../../componentes/Card"
import styles from "./style.module.css"

const Projetos = () => {

    return(
        <div className={styles.containerProjeto} id="projetos">
            <Card titulo={"teste 1"} conteudo={<p>teste</p>}/>
            <Card titulo={"teste 2"} conteudo={<p>teste</p>}/>
            <Card titulo={"teste 3"} conteudo={<p>teste</p>}/>
        </div>
    )
}

export default Projetos