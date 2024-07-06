import Story from "./story";
import Setinha from "./setinha";

const stories = [{image: "./../../../../public/img/9gag.svg", name: "9gag"},{image: "./../../../../public/img/meowed.svg", name: "meowed"},{image: "./../../../../public/img/barked.svg", name: "barked"},{image: "./../../../../public/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet"},{image: "./../../../../public/img/wawawicomics.svg", name: "wawawicomics"},{image: "./../../../../public/img/respondeai.svg", name: "respondeai"},{image: "./../../../../public/img/filomoderna.svg", name: "filomoderna"},{image: "./../../../../public/img/memeriagourmet.svg", name: "memeriagourmet"}]

export default function Stories(){
    return (
        <div className="stories">
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