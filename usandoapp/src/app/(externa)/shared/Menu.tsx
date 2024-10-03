import MenuItem from "./MenuItem";

export default function Menu(){
    return(
        <nav className="flex gap-5 mt-1">
            <MenuItem url="/" texto="Produtos"/>
            <MenuItem url="/" texto="Blog"/>
            <MenuItem url="/" texto="Clientes"/>
            <MenuItem url="/" texto="Empresa"/>
        </nav>
    )
}