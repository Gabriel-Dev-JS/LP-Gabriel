import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import styles from "./style.module.css";

export const Contato: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const enviarEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_MESSAGE_SERVICE_ID,
        import.meta.env.VITE_MESSAGE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_MESSAGE_KEY_PUBLIC,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Mensagem Enviada com sucesso")
        },
        (error: { text: string }) => {
          toast.error("Erro ao enviar e-mail")
          console.error('FAILED...', error.text);
        }
      );
      e.currentTarget.reset();
  };

  return (
    <div className={styles.containerContato} id="contato">
        <div className={styles.containerContatoFilho}>
        <div className={styles.tituloCurriculo}>
          <h3>Fale Comigo</h3>
        </div>
        <div>
          <form ref={form} onSubmit={enviarEmail} className={styles.containerForm}>
              <div className={styles.inputEmail}>
                  <input type="text" name="name" placeholder="Nome" className={styles.email}/>
                  <input type="email" name="email" placeholder="Email" className={styles.email}/>
              </div>
              <div className={styles.inputTextArea}>
                  <textarea className={styles.area} name="message" placeholder="Olá, sinta-se a vontade para entrar em contato"/>
              </div>
              <div className={styles.inputBtn}>
                  <input type="submit" value="Enviar Email" className={styles.btnEmail}/>
              </div>
          </form>
        </div>
        </div>
    </div>
  );
};

export default Contato