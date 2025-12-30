import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import styles from "./style.module.css";

const HeaderMobile = () => {
  return (
    <div className={styles.containerHeaderMobile}>
      <div className={styles.containerModal}>
        <div className={styles.modal}>
          <div className={styles.linhas}></div>
          <div className={styles.linhas}></div>
          <div className={styles.linhas}></div>
        </div>
      </div>
      <div className={styles.containerIconesMobile}>
        {/* <FaGithubSquare className={styles.iconesMobile}/>
        <CiLinkedin className={styles.iconesMobile}/> */}
        <a href="https://github.com/Gabriel-Dev-JS" target="_blank">
            <FaGithubSquare className={styles.iconesMobile}/>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-oliveira-7a7524219/" target="_blank">
            <CiLinkedin className={styles.iconesMobile}/>
        </a>
      </div>
    </div>
  )
}

export default HeaderMobile