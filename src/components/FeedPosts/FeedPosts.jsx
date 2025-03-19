import FeedPost from "./FeedPost"

function FeedPosts(){
    return(
        <div className="feedposts">
            <FeedPost  
                username="justin" 
                image="./images/jinwoo.png" 
                avatar="./images/img1.png"
            />
            <FeedPost 
                username="aaron" 
                image="./images/luffy.png" 
                avatar="./images/luffy.png"
            />
            <FeedPost 
                username="justin" 
                image="./images/img1.png" 
                avatar="./images/img1.png"
            />
            <FeedPost
                username="justin" 
                image="./images/img1.png" 
                avatar="./images/img1.png"
            />
        </div>
    )

}

export default FeedPosts