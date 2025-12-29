import emailjs from "@emailjs/browser"
import { useEffect } from "react"
import styles from "./style.module.css"

const Contato = () => {

    useEffect(()=> {
        emailjs.init(import.meta.env.VITE_MESSAGE_KEY_PUBLIC)
    },[])

    return (
        <div className={styles.containerContato}>
            <div className={styles.containerContatoFilho}>
                <div className={styles.inputs}>
                    <input 
                    type="text"
                    placeholder="Digite seu nome"
                    className={styles.inputNome}
                    />
                    <input 
                    type="email"
                    placeholder="Digite seu email"
                    className={styles.inputNome}
                    />
                    <textarea 
                    className={styles.inputMensagem}
                    />
                </div>
                <div>
                    <div>
                        <p>Fique avontade para entrar em contato</p>
                    </div>
                    <div>
                        <button>Enviar email</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato