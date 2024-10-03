import Image from "next/image";


export default function Loading(){
    return (
        <div className="
            flex flex-col justify-center items-center 
            h-96 gap-4
        ">
            <Image
                src='/loading.gif'
                width={25}
                height={25}
                alt="Imagem de carregamento"
                className="rounded-full"
            />
            <span>Carregando ...</span>
        </div>
    )
}