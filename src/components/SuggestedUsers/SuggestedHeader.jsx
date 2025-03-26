import { Link } from "react-router-dom"
import useAuthStore from "../../store/authStore"
import useLogout from "../../hooks/useLogout"

function SuggestedHeader(props){
    const {user} = useAuthStore()
    const {handleLogout} = useLogout()

    if(!user) return null;
    return(
        <div className="suggested-header">
            <Link to={`${user.username}`} > 
                <img className="suggested-header-avatar" src={user.profilePicURL}></img>
            </Link>
            <Link style={{textDecoration: "none"}} to={`${user.username}`}>
                <p>{user.username}</p>
            </Link>
            <div className="suggested-header-logout" onClick={handleLogout}>
                <p className="suggested-header-logout">Log Out</p>
            </div>
        </div>
    )
}

export default SuggestedHeader