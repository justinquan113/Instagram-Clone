import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

function FeedPost(props){
    return(
        <div className="feed-post">
            <div>
                <PostHeader username={props.username} avatar={props.avatar}/>
            </div>
            <img src= {props.image} className="feed-image"></img>
            
            <PostFooter username={props.username}/>
        </div>
    )
}

export default FeedPost