import Topo from "./topo";
import Conteudo from "./conteudo";
import Fundo from "./fundo";

export default function Post(props){
    return (
        <div class="post">
            <Topo image={props.image} user={props.user}/>
            <Conteudo content={props.content}/>
            <Fundo anotherUserImage={props.anotherUserImage} anotherUser={props.anotherUser} likes={props.likes}/>
        </div>
    )
}