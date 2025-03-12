function Comment(props){
    return(
        <div className="comment">

            <img className="modal-avatar" src= {props.avatar}></img>
            <div className="user-day">
                <p style={{fontWeight: "bold"}}>{props.username}</p>
                <p className="created-at">{props.createdAt}</p>
            </div>
            <p style={{fontSize: "14px"}}>{props.comment}</p>
        </div>
    )
}

export default Comment