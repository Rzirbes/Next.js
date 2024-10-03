import Link from "next/link"
import React from "react"

export interface ExercicioProps {
    titulo: string
    url: string
    icone: any
}

export default function Exercicio(props: ExercicioProps) {

    return (
        <Link href={props.url} className="
            flex flex-col items-center overflow-hidden
            border border-zinc-700 rounded-lg    
        ">

            {React.cloneElement(props.icone, {
                size: 80,
                stroke: 1,
                className: 'py-3'
            })}
            <h3 className="flex justify-center
                bg-black w-full p-3 
            ">{props.titulo}</h3>
        </Link>
    )

}