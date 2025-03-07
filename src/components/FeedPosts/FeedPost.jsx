import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

function FeedPost(){
    return(
        <div className="feed-post">
            <div>
                <PostHeader />
            </div>
            <img src= "./images/img1.png" className="feed-image"></img>
            
            <PostFooter />
        </div>
    )
}

export default FeedPost