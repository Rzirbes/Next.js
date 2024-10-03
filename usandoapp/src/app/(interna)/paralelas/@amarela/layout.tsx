export default function Layout(props: any){
    return(
        <div className="
            flex justify-center items-center h-36
            text-4xl font-black bg-yellow-600
        ">
            {props.children}
        </div>
    )
}