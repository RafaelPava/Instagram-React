import Stories from "./stories";
import Posts from "./posts";
import styles from './Esquerda.module.css'

export default function Esquerda(){
    return (

    <div className={styles.esquerda}>
        <Stories />
        <Posts />
    </div>
    )
}