import Logo from "./logo";
import LogoMobile from "./logoMobile";
import InstagramMobile from "./instagramMobile";
import Pesquisa from "./pesquisa";
import Icones from "./icones";
import IconesMobile from "./iconesMobile";
import styles from './Container.module.css'

export default function Container(){
    return (
        <>
        <div className={styles.container}>
            <Logo />
            <LogoMobile />
            <InstagramMobile />
            <Pesquisa />
            <Icones />
            <IconesMobile />
        </div>
        </>
    );
}