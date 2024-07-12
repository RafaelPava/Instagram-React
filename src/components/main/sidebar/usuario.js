import styles from './Usuario.module.css'

export default function Usuario(props){ 
    return (
        <div className={styles.usuario}>
            <Imagem src={props.src} />
            <Texto text={props.text} name={props.name} razao={props.razao}/>
          </div>
    );
}

function Imagem(props){
    return(
        <img src={props.src} />
    );
}

function Texto(props){
    if(props.razao === ""){
        return (
            <div className={styles.texto}>
            <strong>{props.text}</strong>
            {props.name}
            </div>
        );
    }else{
        return (
            <div className={styles.texto}>
            <strong>{props.text}</strong>
            {props.name}
            <div className={styles.texto}>{props.razao}</div>
            </div>
        );
    }
}