import Story from "./story";
import Setinha from "./setinha";
import styles from './Stories.module.css'

const stories = [{image: "./img/9gag.svg", name: "9gag"},{image: "./img/meowed.svg", name: "meowed"},{image: "./img/barked.svg", name: "barked"},{image: "./img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet"},{image: "./img/wawawicomics.svg", name: "wawawicomics"},{image: "./img/respondeai.svg", name: "respondeai"},{image: "./img/filomoderna.svg", name: "filomoderna"},{image: "./img/memeriagourmet.svg", name: "memeriagourmet"}]

export default function Stories(){
    return (
        <div className={styles.stories}>
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