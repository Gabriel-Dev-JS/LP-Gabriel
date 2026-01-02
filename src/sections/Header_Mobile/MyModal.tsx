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
                {/* <div onClick={()=> scroll("#sobre")}><hr></hr><p>Sobre</p><hr></hr></div> */}
                
                <div onClick={()=> scroll("#projetos")}><p>Projetos</p><hr></hr></div>
                
                <div onClick={()=> scroll("#curriculo")}><p>Curriculo</p><hr></hr></div>
                
                <div onClick={()=> scroll("#contato")}><p>Contato</p></div>
            </div>
        </div>
    )

}

export default MyModal




// import { useEffect, useRef } from "react";
// import { IoCloseCircle } from "react-icons/io5";

// interface ModalProps {
//   openModal: boolean;
//   setOpenMOdal: (value: boolean) => void;
// }

// const MyModal = ({ openModal, setOpenMOdal }: ModalProps) => {
//   const modalRef = useRef<HTMLDivElement | null>(null);

//   const scroll = (ids: string) => {
//     const idsConteudo = document.querySelector(ids);
//     idsConteudo?.scrollIntoView({ behavior: "smooth" });
//     setOpenMOdal(false); // fecha após clicar no item
//   };

//   // 👇 detecta clique fora
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         modalRef.current &&
//         !modalRef.current.contains(event.target as Node)
//       ) {
//         setOpenMOdal(false);
//       }
//     }

//     if (openModal) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [openModal, setOpenMOdal]);

//   return (
//     openModal && (
//       <div ref={modalRef} className={styles.containerMyModalOpen}>
//         <div className={styles.iconClose}>
//           <IoCloseCircle size={30} onClick={() => setOpenMOdal(false)} />
//         </div>

//         <div style={{ display: "flex", flexDirection: "column", margin: "0 8px", fontWeight: 600 }}>
//           <div onClick={() => scroll("#sobre")}><p>Sobre</p></div>
//           <div onClick={() => scroll("#projetos")}><p>Projetos</p></div>
//           <div onClick={() => scroll("#curriculo")}><p>Curriculo</p></div>
//           <div onClick={() => scroll("#contato")}><p>Contato</p></div>
//         </div>
//       </div>
//     )
//   );
// };

// export default MyModal;
