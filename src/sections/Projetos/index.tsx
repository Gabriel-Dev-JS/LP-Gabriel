import type { ReactNode } from "react";
import Card from "../../componentes/Card"
import styles from "./style.module.css"
import { SiExpress, SiFlask, SiJest, SiPrisma, SiSqlite } from "react-icons/si";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt, FaDocker, FaNode } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";


interface Projeto {
    titulo: string;
    conteudo: string;
    tecnologias: ReactNode[];
}

const Projetos = () => {

    const projetos:Projeto[] = [
        {
            titulo: "Gym Planner",
            conteudo: "É um gerenciador de treinos de academia, o professor cria os exercicios e o aluno tem acesso, no login possui uma validação para identificar se o usuario é professor ou aluno.",
            // conteudo: "Foi um projeto feito na faculdade, na materia de desenvolvimento de aplicaçãoes rapidas em flask, este trabalho foi feito em 3 pessoas, onde eu atuei no backend, outro colega no front-end e o terceito sendo PO levantando requisitos e criando os cards no trello.",
            tecnologias: [<SiFlask />, <SiSqlite />, <IoLogoHtml5 />, <FaCss3Alt />, <IoLogoJavascript />]
            // tecnologias: ["Flask", "SQLite", "HTML", "CSS", "JavaScript"]
        },
        {
            titulo: "Backend ToDo",
            conteudo: "Backend de um ToDo que eu criei para organizar o meu dia, projeto caseiro e de rapido desenvolvimento criado para o intuito auxiliar nas minhas tarefas diarias",
            tecnologias: [<SiExpress />, <FaNode />, <BiLogoTypescript />, <SiSqlite />]
            // tecnologias: ["express.js", "Node.js", "Typescript", "SQLite"]
        },
        {
            titulo: "Organizador Financeiro",
            conteudo: "Criei uma carteira onde o usuario consegue gerir o seu salario, inputando os valores arrecadados e gastos durante o mês, ajudando nassim no controle dos gastos mensais",
            tecnologias: [<SiExpress />, <FaNode />, <BiLogoTypescript />, <BiLogoPostgresql />, <SiPrisma />, <FaDocker />, <SiJest />]
            // tecnologias: ["express.js", "Node.js", "Typescript", "Postgres", "Prisma", "docker", "jest"]
        }
    ]

    return(
        <div className={styles.containerProjeto} id="projetos">
            {projetos.map((projeto) => (
                <Card
                    key={projeto.titulo}
                    titulo={projeto.titulo}
                    conteudo={projeto.conteudo}
                    tecnologia={
                    <ul className={styles.listaTecnologias}>
                        {projeto.tecnologias.map((tech) => (
                        <li style={{width:"1000%"}} key={tech}>{tech}</li>
                        ))}
                    </ul>
                    }
                >
                </Card>
            ))}
            {/* <Card titulo={"teste 2"} conteudo={<p>teste</p>}/>
            <Card titulo={"teste 3"} conteudo={<p>teste</p>}/> */}
        </div>
    )
}

export default Projetos