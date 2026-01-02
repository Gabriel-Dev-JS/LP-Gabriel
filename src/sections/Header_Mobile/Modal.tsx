// import { useRef } from "react"
// import { HiMenu } from "react-icons/hi"
// import styles from "./style.module.css"

// const Modal:React.FC = () => {

//     const dialoRef:React.RefObject<null> = useRef(null)

//     return(
//         <>
//             <dialog ref={dialoRef}>
//                 <div>
//                     <div>Sobre</div>
//                     <hr></hr>
//                     <div>Projetos</div>
//                     <hr></hr>
//                     <div>Curriculo</div>
//                     <hr></hr>
//                     <div>Contato</div>
//                 </div>
//             </dialog>

//             <HiMenu className={styles.iconesMobile} onClick={()=> dialoRef?.current?.showModal()}/>
//         </>
//     )
// }

// export default Modal