import React from "react"
function SuggestUser(props){
    const [isFollow, setIsFollow] = React.useState(false)

    function toggleFollow(){
        setIsFollow(prevFollow => !prevFollow)
    }

    return(
        <div className="suggested-user">
            <img className="suggested-header-avatar" src= {props.avatar}></img>
            <div className="suggested-user-info">
                <p style={{fontWeight: "bold", fontSize: "14px"}}>{props.username}</p>
                <p style={{fontSize: "12px", color: "gray"}}>{props.followers} followers</p>                              
            </div>
            <button onClick={toggleFollow} 
                    className="suggested-user-follow">
                    {isFollow ? "Unfollow" : "Follow"}
            </button>
        </div>
    )
}

export default SuggestUser