import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants"
import {Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import useAuthStore from "../../store/authStore";
import useLogout from "../../hooks/useLogout";
function Sidebar(){
   
    const {handleLogout} = useLogout()
    return (
        <div className="sidebar">
            
            <Link to={"/"} className="sidebar-icon-text">
                
                <InstagramLogo className="sidebar-instagram"/>
                <InstagramMobileLogo className="mobile-logo"/>
                
            </Link>
            
            <Link to={"/"} className="sidebar-icon-text">
                <FaHome className="sidebar-icon"/>
                <h3>Home</h3>
            </Link>
            <Link className="sidebar-icon-text">
                <FaSearch className="sidebar-icon"/>
                <h3>Search</h3>
            </Link>
            <Link className="sidebar-icon-text">
                <IoIosNotifications className="sidebar-icon"/>
                <h3>Notifications</h3>
            </Link>
            <Link className="sidebar-icon-text">
            <FaRegSquarePlus className="sidebar-icon"/>
                <h3>Create</h3>
            </Link>
            <Link className="sidebar-icon-text" to={"/profile"}>
                <img className="avatar"  src="./images/jinwoo.png"></img>
                <h3>Profile</h3>
            </Link>

            <div onClick={handleLogout} className="sidebar-logout">
                <CiLogout className="sidebar-icon"/>
                <h3>Log out</h3>
            </div>  
        </div>
           

       
    )
    
    
} 

export default Sidebar