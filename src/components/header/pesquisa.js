import styles from './Pesquisa.module.css'

export default function Pesquisa(){
    return (
        <div className={styles.pesquisa}>
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}