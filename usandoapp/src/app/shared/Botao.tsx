import Link from "next/link"
import { space } from "postcss/lib/list"

interface BotaoProps {
    url?: string
    onClick?: () => void
    destacado?: boolean
    children?: any
    maior?: boolean
}

export default function Botao(props: BotaoProps) {

    function renderizarBotao() {
        return (
            <button className={`
                ${props.destacado
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'bg-black text-white hover:border-zinc-400'
                }
                ${props.maior ? 'px-5 py-3' : 'px-2 py-1.5 text-sm'}
                border border-zinc-600  rounded-lg 
            `} onClick={props.onClick}>
                {props.children}
            </button>
        )
    }

    return props.url
        ? <Link href={props.url}>{renderizarBotao()}</Link>
        : renderizarBotao()
}