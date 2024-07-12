import Acoes from "./acoes";
import Curtidas from "./curtidas";
import styles from './Fundo.module.css'

export default function Fundo(props){
    return (
        <div className={styles.fundo}>
            <Acoes />
            <Curtidas anotherUserImage={props.anotherUserImage} anotherUser={props.anotherUser} likes={props.likes}/>
        </div>
    );
}