import Usuario from "./usuario"

export default function Sugestao(props){
    return (
        <div class="sugestao">
            <Usuario src={props.src} text={props.text} razao={props.razao}/>
            
            <div class="seguir">Seguir</div>
        </div>
    )
}