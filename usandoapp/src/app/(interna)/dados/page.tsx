import Titulo from "../shared/Titulo";

// export const revalidate = 0

async function obterProdutos() {
    const url = 'http://localhost:3000/dados/produtos'
    const produtos = await fetch(url, {
        cache:'no-store',
        next: {
            revalidate: 2
        }
    })
    return await produtos.json()
}

export default async function Page() {
    const produtos = await obterProdutos()
    return (
        <div className="flex flex-col gap-10">
            <Titulo
                texto="Usando API"
                legenda="Componente com dados de uma api"
            />
            <div>
                {produtos.map((produto: any) => (
                    <div
                        key={produto.id}
                        className="
                            flex justify-between
                            odd:bg-zinc-800 even:bg-zinc-700
                            px-5 py-2.5
                        " 
                    >
                        <span>{produto.id} -</span>
                        <span>{produto.nome}</span>
                        <span>R$ {produto.preco}</span>
                        <span>{new Date(produto.data).toLocaleTimeString()}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}