import styles from './Logo.module.css'

export default function Logo(){
    return (
        <div className={styles.logo}>
            <ion-icon name="logo-instagram"></ion-icon>
            <div className={styles.separador}></div>
            <img src="./img/logo.png" />
        </div>
    );
}