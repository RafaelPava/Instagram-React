export default function Curtidas(props){
    return (
        <div class="curtidas">
            <Imagem src={props.anotherUserImage}/>
            <Texto name={props.anotherUser} number={props.likes}/>
        </div>
    );
}

function Imagem(props){
    return (
        <img src={props.src} />
    );
}

function Texto(props){
    return (
        <div class="texto">
            Curtido por <strong>{props.name}</strong> e <strong>outras {props.number} pessoas</strong>
        </div>
    );
}