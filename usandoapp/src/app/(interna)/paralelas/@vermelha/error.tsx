'use client'

import { IconMoodSadSquint } from "@tabler/icons-react"

export default function ErroPersonalizado() {
    return (
        <div className="flex flex-col items-center justify-center">
            <IconMoodSadSquint
                size={50}
                stroke={1}
                className="text-black"
            />
            <h1 className="text-xl font-black">
                Ops, Ocorreu um Erro
            </h1>
        </div>
    )
}