import Pagina from "@/components/Pagina";
export async function getStaticProps() {
    const produtos = [
        { id: 1, nome: 'Caneta', preco: 9.99 },
        { id: 2, nome: 'Caderno', preco: 19.99 },
        { id: 3, nome: 'Borracha', preco: 5.99 },
        { id: 4, nome: 'Lapis', preco: 1.99 },
        { id: 5, nome: 'Tesoura', preco: 4.99 },
        { id: 6, nome: 'Cola', preco: 2.99 },
        { id: 7, nome: 'Apontador', preco: 3.99 },
        { id: 8, nome: 'Mochila', preco: 59.99 },
        { id: 9, nome: 'Estojo', preco: 9.99 },
        { id: 10, nome: 'Lapiseira', preco: 7.99 }, 
    ];
    // const resposta = await fetch('http://localhost:3000/api/produtos')
    // const produtos = await resposta.json()
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