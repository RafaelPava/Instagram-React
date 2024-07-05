import Esquerda from "./esquerda/esquerda";
import Sidebar from "./sidebar/sidebar";

export default function Corpo(){
    return (
        <div>
            <Esquerda />
            <Sidebar />
        </div>
    );
}