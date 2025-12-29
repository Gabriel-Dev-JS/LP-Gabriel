import emailjs from "@emailjs/browser"
import { useEffect } from "react"
import styles from "./style.module.css"

const Contato = () => {

    useEffect(()=> {
        emailjs.init(import.meta.env.VITE_MESSAGE_KEY_PUBLIC)
    },[])

    return (
        <div className={styles.containerContato} id="contato">
            <div className={styles.containerContatoFilho}>
                <div>
                    <div>
                        <p>Fique à vontade para entrar em contato</p>
                    </div>
                </div>
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

                    <div>
                        <button>Enviar email</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato