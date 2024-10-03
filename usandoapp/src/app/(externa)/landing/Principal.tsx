import Botao from "@/app/shared/Botao";

export default function Principal() {
    return (
        <div className="
                flex flex-col justify-center items-center 
                h-[450px] gap-10 text-center
            ">
            <h1 className="
                font-black text-6xl leading-[73px]
                bg-clip-text text-transparent
                bg-gradient-to-b from-zinc-100 to-zinc-400"
            >
                Landing Page com Next.js
            </h1>
            <h2 className="text-zinc-500 w-3/4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nemo magnam quod vero quae necessitatibus dolor facilis doloremque
                doloribus voluptas sequi ipsum obcaecati
                libero saepe fugit similique, itaque delectus dicta quibusdam.
            </h2>
            <div className="flex gap-3">
                <Botao url="/" destacado maior>Iniciar</Botao>
                <Botao url="/" maior>Sobre Nós</Botao>
            </div>
        </div>
    )
}