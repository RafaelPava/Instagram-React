import Usuario from "./usuario";
import Sugestoes from "./sugestoes";

export default function Sidebar(){
    return (
        <div className="sidebar">
            <Usuario src="assets/img/catanacomics.svg" text="catanacomics" name="Catana" razao=""/>
            <Sugestoes />
        </div>
    )
}