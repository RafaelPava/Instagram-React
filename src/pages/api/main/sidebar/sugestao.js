import Usuario from "./usuario"

export default function Sugestao(props){
    return (
        <div className="sugestao">
            <Usuario src={props.src} text={props.text} razao={props.razao}/>
            
            <div className="seguir">Seguir</div>
        </div>
    )
}