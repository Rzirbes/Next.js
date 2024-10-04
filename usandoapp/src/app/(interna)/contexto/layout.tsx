

export default function Layout(props: any) {
    return (
        <div className="border-2 border-red-500 p-5">
            {props.children}
        </div>
    )
}