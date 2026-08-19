import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { SiExpo, SiFlask, SiSqlite } from "react-icons/si";


import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../componentes/Card";
import styles from "./style.module.css";

// import 'swiper/css/navigation';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import 'swiper/css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import "swiper/css/pagination";

interface Projeto {
    titulo: string;
    conteudo: string;
    tecnologias?: ReactNode[];
    link: string;
}

const Projetos:React.FC = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);


    const projetos:Projeto[] = [
        {
            titulo: "Gym Planner",
            conteudo: "É um projeto de faculdade e trata-se de um gerenciador de treinos de academia, o professor adiciona o aluno e cria o treino, o aluno recebe o acesso com os treinos criados",
            tecnologias: [<SiFlask className={styles.iconesTecnologias}/>, <SiSqlite className={styles.iconesTecnologias}/>, <IoLogoHtml5 className={styles.iconesTecnologias}/>, <FaCss3Alt className={styles.iconesTecnologias}/>, <IoLogoJavascript className={styles.iconesTecnologias}/>],
            link: "https://github.com/Gabriel-Dev-JS/GymPlanner"
        },
        {
            titulo: "Schedule-Day", 
            conteudo: "To-Do list feito com expo-react-native e expo-sqlite, criado para ser simples e útil, possui as quatro operações do crud, além da barra de pesquisa",
            tecnologias: [<SiExpo className={styles.iconesTecnologias}/>, <SiSqlite className={styles.iconesTecnologias}/>],
            link: "https://github.com/Gabriel-Dev-JS/schedule-day"
        },
        {
            titulo: "Saldo Planejado",
            conteudo: "Aplicativo feito para o planejamento das contas durante o mês, substituindo a calculadora e o papel",
            // tecnologias: [<SiExpress className={styles.iconesTecnologias}/>, <FaNode className={styles.iconesTecnologias}/>, <BiLogoTypescript className={styles.iconesTecnologias}/>, <BiLogoPostgresql className={styles.iconesTecnologias}/>, <SiPrisma className={styles.iconesTecnologias}/>, <FaDocker className={styles.iconesTecnologias}/>, <SiJest className={styles.iconesTecnologias}/>],
            link: "https://total-restante.vercel.app/"
        }
    ]

    return(
        <div className={styles.projetos} id="projetos">
            <p className={styles.tituloProjeto}>PROJETOS</p>
            {isMobile ? (
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                loop={true}
                slidesPerView={1}
                navigation
            >
                {projetos.map((projeto) => (
                <SwiperSlide className={styles.meuSwiper} key={projeto.titulo}>
                    <Card
                    titulo={projeto.titulo}
                    conteudo={projeto.conteudo}
                    link={projeto.link}
                    tecnologia={
                        <ul className={styles.listaTecnologias}>
                        {projeto.tecnologias?.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                        </ul>
                    }
                    />
                </SwiperSlide>
                ))}
            </Swiper>
            ) : (
            <div className={styles.containerProjeto}>
                {projetos.map((projeto) => (
                <Card
                    key={projeto.titulo}
                    titulo={projeto.titulo}
                    conteudo={projeto.conteudo}
                    link={projeto.link}
                    tecnologia={
                    <ul className={styles.listaTecnologias}>
                        {projeto.tecnologias?.map((tech, index) => (
                        <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    }
                />
                ))}
            </div>
            )}
        </div>
    )
}

export default Projetos