import Image from "next/image";

export interface MenuUsuarioProps {
    nome: string
    email: string
    imagem: string
}


export default function MenuUsuario(props: MenuUsuarioProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="flex flex-col">
                <span className="text-zinc-300 font-bold">{props.nome}</span>
                <span className="text-zinc-500 text-sm">{props.email}</span>
            </div>
            <Image
                src={props.imagem}
                width={50}
                height={50}
                alt="imagem do usuario"
                className="rounded-full"
            />
        </div>
    )
}