import Card from "../../componentes/Card"
import styles from "./style.module.css"

interface Projeto {
    titulo: string;
    conteudo: string;
    tecnologias: string[];
}

const Projetos = () => {

    const projetos:Projeto[] = [
        {
            titulo: "Gym Planner",
            conteudo: "Foi um projeto feito na faculdade, na materia de desenvolvimento de aplicaçãoes rapidas em flask, este trabalho foi feito em 3 pessoas, onde eu atuei no backend, outro colega no front-end e o terceito sendo PO levantando requisitos e criando os cards no trello.",
            tecnologias: ["Flask", "SQLite", "HTML", "CSS", "JavaScript"]
        },
        {
            titulo: "Backend ToDo",
            conteudo: "Backend de um ToDo que eu criei para organizar o meu dia, projeto caseiro e de rapido desenvolvimento criado para o intuito auxiliar nas minhas tarefas diarias",
            tecnologias: ["express.js", "Node.js", "Typescript", "SQLite"]
        },
        {
            titulo: "Organizador Financeiro",
            conteudo: "Este projeto eu criei para que eu pudesse estudar e me aprofundar em testes (integração e unitario) e docker, criei uma carteira onde o usuario consegue gerir o seu salario, inputando os valores arrecadados e gastos durante o mês",
            tecnologias: ["express.js", "Node.js", "Typescript", "Postgres", "Prisma", "docker", "jest"]
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
                    <ul>
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