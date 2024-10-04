'use client'

import { useContext } from "react"
import DiaContext from "../DiaContext"
import Botao from "@/app/shared/Botao"
import Link from "next/link"

export default function Page() {

    const { dia, proximoDia, diaAnterior } = useContext(DiaContext)

    return (

        <div className="flex flex-col gap-10">
            <span className="text-7xl font-black">{dia}</span>
            <div className="flex gap-5">
                <Botao onClick={diaAnterior}>Anterior</Botao>
                <Botao onClick={proximoDia} destacado>Próximo</Botao>
            </div>
            <Link href={'/contexto/a'}>Ir para Página A</Link>
        </div>
    )
}