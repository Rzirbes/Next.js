import Pagina from "@/components/Pagina";
import { revalidatePath } from "next/cache";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export async function getStaticProps() {
    const resposta = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resposta.json()
    const data = new Date().toLocaleTimeString('pt-BR')
    return {
        props: { produtos, data },
        revalidate: 10
    }
}

export default function PaginaISR({ produtos, data }: any) {
    return (
        <Pagina>
            <h1>Renderização incremental (ISR)</h1>
            <h2>Gerado em: {data}</h2>
            <ul>
                {produtos.map((produto: any) => {
                    return (
                        <div key={produto.id} className="
                            flex gap-36 justify-between text-xl
                            font-thin bg-zinc-700 w-full px-12 py-1
                            border border-zinc-300
                        ">
                            <li>{produto.id}</li>
                            <li className="">{produto.nome}</li>
                            <li>{produto.preco}</li>
                        </div>
                    )
                })}
            </ul>
        </Pagina>
    )
}