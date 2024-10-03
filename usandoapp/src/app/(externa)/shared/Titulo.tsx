export interface TituloProps {
    texto: string
    legenda?: string
    className?: string

}

export default function Titulo(props: TituloProps) {
    return (
        <div className={`
            flex justify-center items-baseline gap-4
            ${props.className ?? ''}
        `}>
            <h3 className="
                text-3xl font-black
                bg-clip-text text-transparent
                bg-gradient-to-b from-zinc-100 to-zinc-400
            ">
                {props.texto}
            </h3>
            {props.legenda && (
                <h4 className="text-lg text-zinc-500">
                    {props.legenda}
                </h4>
            )}
        </div>
    )
}