import Logo from "./logo";
import LogoMobile from "./logoMobile";
import InstagramMobile from "./instagramMobile";
import Pesquisa from "./pesquisa";
import Icones from "./icones";
import IconesMobile from "./iconesMobile";

export default function Container(){
    return (
        <div className="container">
            <Logo />
            <LogoMobile />
            <InstagramMobile />
            <Pesquisa />
            <Icones />
            <IconesMobile />
        </div>
    );
}