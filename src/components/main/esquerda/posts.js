import Post from "./post"

const posts = [{image: "./../../../../public/img/meowed.svg", user: "meowed", content: "./../../../../public/img/gato-telefone.svg", anotherUserImage: "./../../../../public/img/respondeai.svg", anotherUser: "respondeai", likes: "101.523"}, {image: "./../../../../public/img/barked.svg", user: "barked", content: "./../../../../public/img/dog.svg", anotherUserImage: "./../../../../public/img/adorable_animals.svg", anotherUser: "adorable_animals", likes: "99.159"}]

export default function Posts(){
    <div className="posts">
        {posts.map((post) => {
            <>
                <Post image={post.image} user={post.user} content={post.content} anotherUserImage={post.anotherUserImage} anotherUser={post.anotherUser} likes={post.likes}/>
            </>
        })}
    </div>
}