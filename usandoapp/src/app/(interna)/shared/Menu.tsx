'use client'

import { IconArrowsJoin, IconBug, IconLayoutDashboard, IconLoader, IconRoute } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import MenuGrupo from "./MenuGrupo";
import { usePathname } from "next/navigation";

export default function Menu() {

    const url = usePathname()


    return (
        <nav className="flex flex-col gap-4 py-7">
            <MenuItem
                url="/home"
                texto="Início"
                icone={<IconLayoutDashboard />}
                selecionado={url === '/home'}
            />
            <MenuGrupo titulo="Exercícios">
                <MenuItem
                    url="/loading"
                    texto="Loading"
                    icone={<IconLoader />}
                    selecionado={url === '/loading'}
                />
                <MenuItem
                    url="/erro"
                    texto="Erro"
                    icone={<IconBug />}
                    selecionado={url === '/erro'}
                />
                <MenuItem
                    url="/dinamica/blog/123?filtros=inativos"
                    texto="Rota Dinamica #1"
                    icone={<IconRoute />}
                    selecionado={url === '/dinamica/blog/123'}
                />
                <MenuItem
                    url="/dinamica/curso/html-basico?esconderAulasConcluidas=true"
                    texto="Rota Dinamica #2"
                    icone={<IconRoute />}
                    selecionado={url === '/dinamica/curso/html-basico'}
                />
                <MenuItem
                    url="/paralelas"
                    texto="Rotas Paralelas"
                    icone={<IconArrowsJoin />}
                    selecionado={url === '/paralelas'}
                />
            </MenuGrupo>
        </nav>
    )
}