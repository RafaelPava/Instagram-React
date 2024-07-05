export default function Topo(props){
    return (
        <div class="topo">
            <Usuario src={props.image} text={props.user} />
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function Usuario(props){
    return (
        <div class="usuario">
            <img src={props.src} />
            {props.text}
        </div>
    )
}