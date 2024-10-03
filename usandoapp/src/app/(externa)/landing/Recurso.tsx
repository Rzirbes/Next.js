import Image from "next/image"

export interface RecursosProps{
    titulo: string
    texto: string
    imagem: string
}

export default function Recurso(props: RecursosProps){
    return (
        <div className="
            flex flex-col
            border border-zinc-700 p-5 rounded-lg
        ">
            <Image 
                src={props.imagem} 
                width={250}
                height={300}
                alt="imagem do curso"
                className="self-center mb-7"
            />
            <h3 className="text-xl font-semibold">
                {props.titulo}
            </h3>
            <p className="text-zinc-500 text-sm">
                {props.texto}
            </p>
        </div>
    )
}