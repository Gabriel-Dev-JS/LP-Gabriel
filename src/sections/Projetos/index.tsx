import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaDocker, FaNode } from "react-icons/fa";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiFlask, SiJest, SiPrisma, SiSqlite } from "react-icons/si";

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
    tecnologias: ReactNode[];
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
            titulo: "Backend ToDo", 
            conteudo: "Backend de um ToDo, projeto caseiro e de rapido desenvolvimento, criado no intuito de auxiliar nas minhas tarefas diarias",
            // conteudo: "Backend de um ToDo que eu criei para organizar minha rotina, projeto caseiro e de rapido desenvolvimento, criado no intuito de auxiliar nas minhas tarefas diarias",
            tecnologias: [<SiExpress className={styles.iconesTecnologias}/>, <FaNode className={styles.iconesTecnologias}/>, <BiLogoTypescript className={styles.iconesTecnologias}/>, <SiSqlite className={styles.iconesTecnologias}/>],
            link: "https://github.com/Gabriel-Dev-JS/Backend-ToDo"
        },
        {
            titulo: "Organizador Financeiro",
            conteudo: "Criei uma carteira onde o usuario consegue gerir o seu salario, inputando os valores arrecadados e gastos durante o mês, para o melhor controle dos gastos mensais",
            tecnologias: [<SiExpress className={styles.iconesTecnologias}/>, <FaNode className={styles.iconesTecnologias}/>, <BiLogoTypescript className={styles.iconesTecnologias}/>, <BiLogoPostgresql className={styles.iconesTecnologias}/>, <SiPrisma className={styles.iconesTecnologias}/>, <FaDocker className={styles.iconesTecnologias}/>, <SiJest className={styles.iconesTecnologias}/>],
            link: "https://github.com/Gabriel-Dev-JS/organizador_financeiro"
        }
    ]

    return(
        <div className={styles.projetos} id="projetos">
            {/* <p style={{textAlign:"center", margin:"24px 0px 24px 0px", color:"white", fontWeight:"600"}}>PROJETOS</p> */}
            <p className={styles.tituloProjeto}>PROJETOS</p>
            {/* {isMobile && <p style={{textAlign:"center", margin:"24px 0px 24px 0px", color:"white", fontWeight:"600"}}>PROJETOS</p>} */}
            {isMobile ? (
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                loop={true}
                slidesPerView={1}
                navigation
            >
                {projetos.map((projeto) => (
                // <SwiperSlide key={projeto.titulo}>
                <SwiperSlide className={styles.meuSwiper} key={projeto.titulo}>
                    <Card
                    titulo={projeto.titulo}
                    conteudo={projeto.conteudo}
                    link={projeto.link}
                    tecnologia={
                        <ul className={styles.listaTecnologias}>
                        {projeto.tecnologias.map((tech, index) => (
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
                        {projeto.tecnologias.map((tech, index) => (
                        <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    }
                />
                ))}
            </div>
            )}

            
            {/* {projetos.map((projeto) => (
                <Card
                    key={projeto.titulo}
                    titulo={projeto.titulo}
                    conteudo={projeto.conteudo}
                    tecnologia={
                    <ul className={styles.listaTecnologias}>
                        {projeto.tecnologias.map((tech, index) => (
                        <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    }
                >
                </Card>
            ))} */}
            {/* <Card titulo={"teste 2"} conteudo={<p>teste</p>}/>
            <Card titulo={"teste 3"} conteudo={<p>teste</p>}/> */}
        </div>
    )
}

export default Projetos