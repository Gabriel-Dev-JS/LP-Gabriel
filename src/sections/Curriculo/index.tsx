import { BsDownload } from "react-icons/bs"
import curriculo from "./Curriculo.pdf"
import styles from "./style.module.css"

const Curriculo = () => {
    return (
        <div className={styles.containerCurriculo} id="curriculo">
            <div className={styles.containerFilho}>
                <div>
                <div className={styles.habilidades}>
                <p className={styles.titulo}>Habilidades</p>
                <div className={styles.buttonCv}><a href={curriculo} download><BsDownload className={styles.iconeDownload}/></a></div>
                {/* <div className={styles.buttonCv}><a href={curriculo} download>Baixar Curriculo</a></div> */}
                </div>
                <p className={styles.conteudo}> -Desenvolvimento front-end (React, Typescript, VTEX Legacy e FastStore)</p>
                <p className={styles.conteudo}> -Criação de landing pages e componentes reutilizáveis</p>
                <p className={styles.conteudo}> -Integração com APIs REST</p>
                <p className={styles.conteudo}> -Desenvolvimento backend com Node.js (Express) e Python (Flask)</p>
                <p className={styles.conteudo}> -Banco de dados relacionais (MySQL, PostgreSQL, SQLite)</p>
                <p className={styles.conteudo}> -Versionamento de código com Git</p>
                </div>
                <div>
                    <p className={styles.titulo}>Experiência Profissional</p>
                    <p><span style={{fontWeight:"600"}}>Shopinfo — Desenvolvedor Júnior</span> (12/2024 – Atual)</p>
                    <p className={styles.conteudo}>-Desenvolvimento de páginas e componentes utilizando VTEX Legacy e FastStore</p>
                    <p className={styles.conteudo}>-Criação de features em React e Typescript focadas em performance</p>
                    <p className={styles.conteudo}>-Desenvolvimento de plataforma de afiliados com Flask e PostgreSQL</p>
                    <p className={styles.conteudo}>-Melhorias contínuas de performance e SEO</p>
                    <br></br>
                    <p><span style={{fontWeight:"600"}}>Ducke — Desenvolvedor Back-end (ERP)</span> (04/2024 – 11/2024)</p>
                    <p className={styles.conteudo}>-Atuação no backend do ERP iDempiere</p>
                    <p className={styles.conteudo}>-Criação e manutenção de funcionalidades internas</p>
                    <p className={styles.conteudo}>-Correção de bugs e melhorias de performance do sistema</p>
                </div>
                <div>
                    <p className={styles.titulo}>Graduação</p>
                    <p className={styles.conteudo}>Análise e Desenvolvimento de Sistemas — Completo (02/2023 – 06/2025)</p>
                </div>
                <div>
                    <p className={styles.titulo}>Idiomas</p>
                    <p className={styles.conteudo}>Português — Nativo</p>
                    <p className={styles.conteudo}>Inglês — Intermediário</p>
                </div>
            </div>
        </div>
    )
}

export default Curriculo