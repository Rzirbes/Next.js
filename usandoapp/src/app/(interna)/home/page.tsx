import { IconArrowsJoin, IconBug, IconLoader, IconRoute, IconRouter } from "@tabler/icons-react";
import Titulo from "../shared/Titulo";
import Exercicio from "./Exercicio";

export default function Page() {
    return (
        <div>
            <Titulo
                texto="Área do Aluno"
                legenda="Lista de todos os exercicios implementados"
            />
            <div className="grid grid-cols-5 gap-5 mt-10 py-10">
                <Exercicio 
                    url="/loading" 
                    titulo="Loading" 
                    icone={<IconLoader/>}
                />
                <Exercicio 
                    url="/erro" 
                    titulo="Erro" 
                    icone={<IconBug/>}
                />
                <Exercicio 
                    url="/dinamica/blog/123?filtros=inativos" 
                    titulo="Rota Dinamica #1" 
                    icone={<IconRoute/>}
                />
                <Exercicio 
                    url="/dinamica/curso/html-basico?esconderAulasConcluidas=true" 
                    titulo="Rota Dinamica #2" 
                    icone={<IconRoute/>}
                />
                <Exercicio 
                    url="/paralelas" 
                    titulo="Rotas Paralelas" 
                    icone={<IconArrowsJoin/>}
                />
            </div>
        </div>
    )
}