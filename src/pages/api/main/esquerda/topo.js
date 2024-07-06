export default function Topo(props){
    return (
        <div className="topo">
            <Usuario src={props.image} text={props.user} />
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function Usuario(props){
    return (
        <div className="usuario">
            <img src={props.src} />
            {props.text}
        </div>
    )
}