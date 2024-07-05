import Post from "./post"

const posts = [{image: "assets/img/meowed.svg", user: "meowed", content: "assets/img/gato-telefone.svg", anotherUserImage: "assets/img/respondeai.svg", anotherUser: "respondeai", likes: "101.523"}, {image: "assets/img/barked.svg", user: "barked", content: "assets/img/dog.svg", anotherUserImage: "assets/img/adorable_animals.svg", anotherUser: "adorable_animals", likes: "99.159"}]

export default function Posts(){
    <div class="posts">
        {posts.map((post) => {
            <Post image={post.image} user={post.user} content={post.content} anotherUserImage={post.anotherUserImage} anotherUser={post.anotherUser} likes={post.likes}/>
        })}
    </div>
}