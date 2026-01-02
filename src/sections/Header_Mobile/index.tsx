import { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import MyModal from "./MyModal";
import styles from "./style.module.css";

const HeaderMobile:React.FC = () => {

  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <div className={styles.containerHeaderMobile}>
      <div className={styles.containerModal}>
        {/* <HiMenu className={styles.iconesMobile} onClick={()=> openModal}/> */}
        {/* <Modal/> */}
        <HiMenu className={styles.iconesMobile} onClick={()=> setOpenModal(!openModal)}/>
        <MyModal openModal={openModal} setOpenMOdal={setOpenModal}/>
        {/* <div className={styles.modal}>
          <div className={styles.linhas}></div>
          <div className={styles.linhas}></div>
          <div className={styles.linhas}></div>
        </div> */}
      </div>
      <div className={styles.containerIconesMobile}>
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