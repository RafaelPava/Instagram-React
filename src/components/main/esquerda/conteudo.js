import styles from './Conteudo.module.css'

export default function Conteudo(props){
    return (
        <div className={styles.conteudo}>
            <img src={props.content} />
        </div>
    );
}