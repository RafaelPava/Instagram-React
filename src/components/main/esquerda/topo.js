import styles from './Topo.module.css'

export default function Topo(props){
    return (
        <div className={styles.topo}>
            <Usuario src={props.image} text={props.user} />
            <div className={styles.acoes}>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function Usuario(props){
    return (
        <div className={styles.usuario}>
            <img src={props.src} />
            {props.text}
        </div>
    )
}