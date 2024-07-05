import Logo from "./api/header/logo";
import LogoMobile from "logoMobile";
import InstagramMobile from "./api/header/instagramMobile";
import Pesquisa from "./api/header/pesquisa";
import Icones from "./api/header/icones";
import IconesMobile from "./api/header/iconesMobile";

export default function Container(){
    return (
        <div class="container">
            <Logo />
            <LogoMobile />
            <InstagramMobile />
            <Pesquisa />
            <Icones />
            <IconesMobile />
        </div>
    );
}