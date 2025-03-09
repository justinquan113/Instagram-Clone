function PostHeader(props){
    return(
        <div className="post-header-container">
            <div className="header-user">
                <img className="avatar" src={props.avatar}></img>
                <p className="user-name">{props.username}</p>
                <p className="user-date">•55m</p>
            </div>
            <p className="unfollow">Unfollow</p>                             
        </div>
    )
}

export default PostHeader