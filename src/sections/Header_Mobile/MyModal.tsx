import { IoCloseCircle } from "react-icons/io5";
import styles from "./style.module.css";

interface ModalProps {
    openModal: boolean;
    setOpenMOdal: (value:boolean)=> void;
}

const MyModal = ({openModal, setOpenMOdal}:ModalProps) => {

    const scroll = (ids:string) => {
        const idsConteudo = document.querySelector(`${ids}`)
        idsConteudo?.scrollIntoView({
            behavior:"smooth"
        })
        setOpenMOdal(false)
    }

    return(
        <div 
        id="openModal"
        className={openModal ? styles.containerMyModalOpen :  styles.containerMyModal}
        >
            <div className={styles.iconClose}>
                <IoCloseCircle onClick={()=> setOpenMOdal(false)}/>
            </div>
            <div style={{display:"flex", flexDirection:"column", margin:"0px 8px 0px 8px", fontWeight:"600"}}>
                <div onClick={()=> scroll("#sobre")}><p>Sobre</p><hr></hr></div>
                
                <div onClick={()=> scroll("#projetos")}><p>Projetos</p><hr></hr></div>
                
                <div onClick={()=> scroll("#curriculo")}><p>Curriculo</p><hr></hr></div>
                
                <div onClick={()=> scroll("#contato")}><p>Contato</p></div>
            </div>
        </div>
    )

}

export default MyModal