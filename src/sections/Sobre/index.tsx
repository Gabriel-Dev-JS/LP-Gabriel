import avatar from "../../images/Avatar-Gabriel-Fundo-Branco.png"
import tag from "../../images/chaves-html.png"
import styles from "./style.module.css"

const Apresentacao = () => {
    return (
        <div className={styles.Apresentacao} id="sobre">
            <div className={styles.sobre}>
                <div style={{display:"flex", alignItems:"center", fontSize:"64px", fontWeight:600, height:"140px"}}><p>Seja bem vindo</p> <img height={100} src={tag}/></div>
                <div style={{fontSize:"32px", display:"flex", flexDirection:"column"}}>
                    <p style={{margin:"0px", maxWidth:"800px"}}>Me chamo Gabriel, sou formado em Análise e Desenvolvimento de Sistemas e trabalho há mais de dois anos com desenvolvimento de software</p>
                    {/* <p style={{marginTop:"4px"}}>Sou desenvolvedor full-stack e trabalho há mais de dois anos com desenvolvimento de software</p> */}
                </div>
            </div>
            <div className={styles.avatar}>
                <img height={400} src={avatar}/>
            </div>
        </div>
    )
}

export default Apresentacao