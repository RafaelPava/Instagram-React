

export default function Story(props){
    return (
        <div class="story">
            <Imagem src={props.src}/>
            <Text text={props.name}/>
        </div>
    );
}

function Imagem(props){
    return (
        <div class="imagem">
            <img src={props.src} />
        </div>
    );
}

function Usuario(props){
    return (
        <div class="usuario">
            {props.text}
        </div>
    );
}