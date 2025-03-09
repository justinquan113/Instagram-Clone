import { Link } from "react-router-dom"

function SuggestedHeader(props){
    return(
        <div className="suggested-header">
            <img className="suggested-header-avatar" src= {props.avatar}></img>
            <p>{props.username}</p>
            <Link to={"/auth"} className="suggested-header-logout">
                <p className="suggested-header-logout">Log Out</p>
            </Link>
        </div>
    )
}

export default SuggestedHeader