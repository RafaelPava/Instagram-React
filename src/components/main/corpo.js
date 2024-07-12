import Esquerda from "./esquerda/esquerda";
import Sidebar from "./sidebar/sidebar";
import styles from './Corpo.module.css'

export default function Corpo(){
    return (
        <div className={styles.corpo}>
            <Esquerda />
            <Sidebar />
        </div>
    );
}