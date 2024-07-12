import Usuario from "./usuario"
import styles from './Sugestao.module.css'

export default function Sugestao(props){
    return (
        <div className={styles.sugestao}>
            <Usuario src={props.src} text={props.text} razao={props.razao}/>
            
            <div className={styles.seguir}>Seguir</div>
        </div>
    )
}