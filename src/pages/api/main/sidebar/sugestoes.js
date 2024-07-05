import Sugestao from "./sugestao";
import Titulo from "./titulo";

const sugestoes = [{image: "assets/img/bad.vibes.memes.svg", text: "bad.vibes.memes", razao: "Segue você"}, {image: "assets/img/chibirdart.svg", text: "chibirdart", razao: "Segue você"}, {image: "assets/img/razoesparaacreditar.svg", text: "razoesparaacreditar", razao: "Novo no Instagram"}, {image: "assets/img/adorable_animals.svg", text: "adorable_animals", razao: "Segue você"}, {image: "assets/img/smallcutecats.svg", text: "smallcutecats", razao: "Segue você"}]

export default function Sugestoes(){
    return (
        <div class="sugestoes">
            <Titulo />
            {sugestoes.map((sugestao) => {
                <Sugestao src={sugestao.image} text={sugestao.text} razao={sugestao.razao}/>
            })}
        </div>
    );
}