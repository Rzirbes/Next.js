import Image from "next/image"

export interface FilmeProps {
    id: string
    titulo: string
    subtitulo: string
    descricao: string
    imagem: string
}

export default function Filme(props: FilmeProps) {
    return (
        <div className="
            flex gap-5 w-3/5 p-5 rounded-2xl
            bg-black border border-zinc-600
        ">
            <Image
                className=" rounded-full self-start"
                src={props.imagem}
                alt="imagem"
                width={150}
                height={150}
            />
            <div className="flex flex-col gap-2">

                <div className="">{props.titulo}</div>
                <div className="text-lg text-zinc-500">{props.subtitulo}</div>
                <div className="text-sm font-light text-zinc-300">{props.descricao}</div>
            </div>
        </div>
    )
}