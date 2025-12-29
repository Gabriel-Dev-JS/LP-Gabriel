import { FaGithubSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import styles from "./style.module.css"

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
        <FaGithubSquare className={styles.iconesMobile}/>
        <CiLinkedin className={styles.iconesMobile}/>
      </div>
    </div>
  )
}

export default HeaderMobile