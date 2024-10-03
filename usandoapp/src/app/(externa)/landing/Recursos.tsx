import Recurso from "./Recurso";

export default function Recursos(){
    return(
        <div className="grid grid-cols-3 gap-5">
            <Recurso 
                titulo="300x mais rápido"
                texto="Lorem ipsum dolor sit amet consectetur"
                imagem="https://picsum.photos/200/300?grayscale&random=1"
            />
            <Recurso 
                titulo="Vanguarda em tecnologia"
                texto="Lorem ipsum dolor sit amet consectetur"
                imagem="https://picsum.photos/200/300?grayscale&random=2"
            />
            <Recurso 
                titulo="Suporte 24/7"
                texto="Lorem ipsum dolor sit amet consectetur"
                imagem="https://picsum.photos/200/300?grayscale&random=3"
            />
            <Recurso 
                titulo="WEB Design Responsivo"
                texto="Lorem ipsum dolor sit amet consectetur"
                imagem="https://picsum.photos/200/300?grayscale&random=4"
            />
            <Recurso 
                titulo="SEO Otimizado"
                texto="Lorem ipsum dolor sit amet consectetur"
                imagem="https://picsum.photos/200/300?grayscale&random=5"
            />
            <Recurso 
                titulo="Yada Yada"
                texto="Lorem ipsum dolor sit amet consectetur"
                imagem="https://picsum.photos/200/300?grayscale&random=6"
            />
        </div>
    )
}