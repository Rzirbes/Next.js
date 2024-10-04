'use client'
import { createContext, useState } from "react"

const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export interface DiaContextProps {
    dia: string
    proximoDia: () => void
    diaAnterior: () => void

}

const DiaContext = createContext<DiaContextProps>({} as any)

export function DiaProvider(props: any) {
    const [indice, setIndice] = useState<number>(0)
    return (
        <DiaContext.Provider value={{
            get dia() {
                const mod = Math.abs(indice) % 7
                if (mod === 0) return dias[0]
                return indice > 0 ? dias[mod] : dias[7 - mod]
            },
            proximoDia: () => setIndice(indice + 1),
            diaAnterior: () => setIndice(indice - 1)
        }}>
            {props.children}
        </DiaContext.Provider>
    )
}

export default DiaContext