import Usuario from "./usuario";
import Sugestoes from "./sugestoes";
import styles from './Sidebar.module.css'

export default function Sidebar(){
    return (
        <div className={styles.sidebar}>
            <Usuario src="assets/img/catanacomics.svg" text="catanacomics" name="Catana" razao=""/>
            <Sugestoes />
        </div>
    )
}