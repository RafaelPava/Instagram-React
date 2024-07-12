import styles from './Titulo.module.css'

export default function Titulo(){
    return (
        <div className={styles.titulo}>
          Sugestões para você
          <div>Ver tudo</div>
        </div>
    );
}