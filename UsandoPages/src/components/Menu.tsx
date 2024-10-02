import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {

    const router = useRouter()

    function renderizarItem(url: string, texto: string, locale: string) {
        const ativo = router.asPath === url

        return (
            <li className={`
                ${ativo ? 'bg-purple-500' : 'bg-purple-950'}
                text-sm 
                hover:bg-purple-500 
                rounded-lg px-4 py-2`}
            >
                <Link href={url} locale={locale}>{texto}</Link>
            </li>
        )
    }

    return (
        <ul className="flex flex-wrap gap-3">
            {renderizarItem('/rotas/basicas', 'Rotas Básicas', 'pt')}
            {renderizarItem('/rotas/basicas/aninhada', 'Rotas Básicas Aninhadas', 'pt')}
            {renderizarItem('/rotas/dinamicas/produto/3', 'Produto #3', 'pt')}
            {renderizarItem('/rotas/dinamicas/curso/next/next-aula-1', 'Curso', 'pt')}
            {renderizarItem('/rotas/dinamicas/consulta/1/2', 'Tags', 'pt')}
            {renderizarItem('/rotas/dinamicas/2010/12/02/agenda', 'Agenda', 'pt')}
            {renderizarItem('/rotas/i18n/saudacao', 'Saudacao En', 'en')}
            {renderizarItem('/rotas/i18n/saudacao', 'Saudacao Pt', 'pt')}
            {renderizarItem('/render/ssg/simples', 'SSG Simples', 'pt')}
            {renderizarItem('/render/ssg/filme', 'Filme SSG', 'pt')}
            {renderizarItem('/render/ssg/catalogo/c36f5a9b-7096-4264-9ef1-d11df9353356', 'Catalogo SSG', 'pt')}
            {renderizarItem('/render/ssg/personagem', 'Api SSG', 'pt')}
            {renderizarItem('/render/ssg/produtos', 'Produto SSG', 'pt')}
            {renderizarItem('/render/isr', 'Produto ISR', 'pt')}
            {renderizarItem('/render/ssr', 'Produto SSR', 'pt')}
        </ul>
    )
}