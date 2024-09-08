import Filme from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";

export function getStaticProps(){
    return {
        props: {filme: filmes[947]}
    }
}

export default function PaginaFilme(props: any){
    return (
        <Pagina>
            <Filme
                id={props.filme.id}
                titulo={props.filme.titulo}
                subtitulo={props.filme.subtitulo}
                imagem={props.filme.imagem}
                descricao={props.filme.descricao}
            />
        </Pagina>
    )
}