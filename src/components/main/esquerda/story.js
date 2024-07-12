import styles from './Story.module.css'

export default function Story(props){
    return (
        <div className={styles.story}>
            <Imagem src={props.src}/>
            <Usuario text={props.name}/>
        </div>
    );
}

function Imagem(props){
    return (
        <div className={styles.imagem}>
            <img src={props.src} />
        </div>
    );
}

function Usuario(props){
    return (
        <div className={styles.usuario}>
            {props.text}
        </div>
    );
}