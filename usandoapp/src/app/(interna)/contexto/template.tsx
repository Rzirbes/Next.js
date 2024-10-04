import { DiaProvider } from "./DiaContext";

export default function Template(props: any) {
    return (
        <DiaProvider>
            <div className="border-2 border-green-500 p-5">
                {props.children}
            </div>
        </DiaProvider>
    )
}