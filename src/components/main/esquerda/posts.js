import Post from "./post"
import styles from "./Posts.module.css"
const posts = [{image: "./img/meowed.svg", user: "meowed", content: "./img/gato-telefone.svg", anotherUserImage: "./img/respondeai.svg", anotherUser: "respondeai", likes: "101.523"}, {image: "./img/barked.svg", user: "barked", content: "./img/dog.svg", anotherUserImage: "./img/adorable_animals.svg", anotherUser: "adorable_animals", likes: "99.159"}]

export default function Posts(){
    return (
        <div className={styles.posts}>
        {posts.map((post) => {
            return (
            <>
                <Post image={post.image} user={post.user} content={post.content} anotherUserImage={post.anotherUserImage} anotherUser={post.anotherUser} likes={post.likes}/>
            </>
            )
        })}
    </div>
    )
    
}