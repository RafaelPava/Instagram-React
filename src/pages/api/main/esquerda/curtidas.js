export default function Curtidas(props){
    return (
        <div className="curtidas">
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
        <div className="texto">
            Curtido por <strong>{props.name}</strong> e <strong>outras {props.number} pessoas</strong>
        </div>
    );
}