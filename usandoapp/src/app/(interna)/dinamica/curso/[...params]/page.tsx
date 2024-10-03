import Titulo from "@/app/(interna)/shared/Titulo";

export default function Page(props: any) {
    return (
        <div>
            <Titulo
                texto="Rota Dinâmica #2"
                legenda="Exibindo todos os parâmentros passados na rota"
            />
            <div className="flex flex-col gap-5 mt-10">
                <span className="text-2xl font-black">ID: {props.params.id}</span>
                <code>
                    <pre className="
                        text-2xl p-5
                        bg-black rounded-md
                    ">
                        {JSON.stringify(props, null, 4)}
                    </pre>
                </code>
            </div>
        </div>
    )
}