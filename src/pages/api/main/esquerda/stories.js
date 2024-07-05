import Story from "./story";
import Setinha from "./setinha";

const stories = [{image: "assets/img/9gag.svg", name: "9gag"},{image: "assets/img/meowed.svg", name: "meowed"},{image: "assets/img/barked.svg", name: "barked"},{image: "assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet"},{image: "assets/img/wawawicomics.svg", name: "wawawicomics"},{image: "assets/img/respondeai.svg", name: "respondeai"},{image: "assets/img/filomoderna.svg", name: "filomoderna"},{image: "assets/img/memeriagourmet.svg", name: "memeriagourmet"}]

export default function Stories(){
    return (
        <div class="stories">
            {stories.map((story) => {
                return (
                    <>
                        <Story src={story.src} text={story.name}/>
                    </>
                )
            })}
            <Setinha />
        </div>
    );
}