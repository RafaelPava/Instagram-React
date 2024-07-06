export default function Story(props){
    return (
        <div className="story">
            <Imagem src={props.src}/>
            <Usuario text={props.name}/>
        </div>
    );
}

function Imagem(props){
    return (
        <div className="imagem">
            <img src={props.src} />
        </div>
    );
}

function Usuario(props){
    return (
        <div className="usuario">
            {props.text}
        </div>
    );
}