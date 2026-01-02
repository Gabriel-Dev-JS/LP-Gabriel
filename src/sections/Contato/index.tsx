import styles from "./style.module.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const Contato: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const enviarEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_0de6h8i', 
        'template_iouqx5e',
        form.current,
        {
          publicKey: 'bZtrvY14rUGGdMWOK',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          //essa função ainda não foi testado (é para apagar os campos do formulario)
          e.currentTarget.reset();
        },
        (error: { text: string }) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className={styles.containerContato} id="contato">
        <div className={styles.containerContatoFilho}>
            <form ref={form} onSubmit={enviarEmail} className={styles.containerForm}>
                <div className={styles.inputEmail}>
                    <input type="text" name="name" placeholder="Nome" className={styles.email}/>
                    <input type="email" name="email" placeholder="Email" className={styles.email}/>
                </div>
                <div className={styles.inputTextArea}>
                    <textarea className={styles.area} name="message" placeholder="Olá, gostaria de dizer algo ?"/>
                </div>
                <div className={styles.inputBtn}>
                    <input type="submit" value="Enviar Email" className={styles.btnEmail}/>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Contato