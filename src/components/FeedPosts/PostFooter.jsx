import { FaRegHeart } from "react-icons/fa";
import { FaRegComment, FaHeart } from "react-icons/fa";
import React from "react";
function PostFooter(props){
    const [likes, setLikes] = React.useState(10)
    const [liked, setLiked] = React.useState(false)

   function handleLike(){
    setLiked(prevState => !prevState)
    setLikes(prevLikes => liked ? prevLikes - 1 : prevLikes + 1)
   }

    return(
        <div className="post-footer-container">
            <div className="footer-like-comment">
                {liked 
                ? <FaHeart onClick={handleLike} style={{fill: "red"}} className="heart"/> 
                : <FaRegHeart onClick={handleLike} className="heart-icon"/>}
                <FaRegComment className="comment-icon"/>
                
            </div>
            <div className="footer-likes-caption">
                <p>{likes} likes</p>
                <div className="caption">
                    <p style={{fontWeight: "700"}}>{props.username}</p>
                    <p style={{fontWeight: "400"}}>Hello</p>
                </div>               
            </div>
            <p>View all 1000 comments</p>
            <div className="posting-comment">
                <input type="text" placeholder="Add a comment..." className="comment-input"></input>
                <button>Post</button>
            </div>
        </div>
    )
}

export default PostFooter