import Pagina from "@/components/Pagina";
export async function getServerSideProps() {
    const resposta = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resposta.json()
    const data = new Date().toLocaleTimeString('pt-BR')
    return {
        props: { produtos, data }
    }
}

export default function PaginaSSR({ produtos, data }: any) {
    return (
        <Pagina>
            <h1>Renderização no Servidor (SSR)</h1>
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