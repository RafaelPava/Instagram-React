import Acoes from "./acoes";
import Curtidas from "./curtidas";

export default function Fundo(props){
    return (
        <div class="fundo">
            <Acoes />
            <Curtidas anotherUserImage={props.anotherUserImage} anotherUser={props.anotherUser} likes={props.likes}/>
        </div>
    );
}