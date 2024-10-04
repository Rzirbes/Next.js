'use client'

import { useState } from "react"

export default function Numero() {

    const [numero, setNumero] = useState<number>(0)

    return (
        <div onClick={() => {setNumero(numero + 1)}}>
            <span className="text-7xl font-black select-none">
                {numero}
            </span>
        </div>
    )
}