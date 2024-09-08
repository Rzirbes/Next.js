import Menu from "./Menu"

interface PaginaProps {
    children?: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="
            flex flex-col min-h-screen
            bg-gradient-to-r from-zinc-900 to-black
            text-5xl font-black
        ">
            <nav className="
                p-3
                bg-black border border-zinc-700
            ">
                <Menu></Menu>
            </nav>
            <main className="flex-1 flex flex-col items-center justify-center ">

                {props.children}
            </main>
        </div>
    )
}