import Sugestao from "./sugestao";
import Titulo from "./titulo";
import styles from './Sugestoes.module.css'

const sugestoes = [{image: "./img/bad.vibes.memes.svg", text: "bad.vibes.memes", razao: "Segue você"}, {image: "./img/chibirdart.svg", text: "chibirdart", razao: "Segue você"}, {image: "./public/img/razoesparaacreditar.svg", text: "razoesparaacreditar", razao: "Novo no Instagram"}, {image: "./public/img/adorable_animals.svg", text: "adorable_animals", razao: "Segue você"}, {image: "./public/img/smallcutecats.svg", text: "smallcutecats", razao: "Segue você"}]

export default function Sugestoes(){
    return (
        <div className={styles.sugestoes}>
            <Titulo />
            {sugestoes.map((sugestao) => {
                <>
                    <Sugestao src={sugestao.image} text={sugestao.text} razao={sugestao.razao}/>
                </>
            })}
        </div>
    );
}