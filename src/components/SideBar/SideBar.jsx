import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants"
import {Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
function Sidebar(){
    return (
        <div className="sidebar">
            <Link to={"/"}>
                
                <InstagramLogo className="sidebar-instagram"/> 
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
            <Link className="sidebar-icon-text">
                <h3>Profile</h3>
            </Link>

            <Link  to={"/auth"} className="sidebar-logout">
                <CiLogout className="sidebar-icon"/>
                <h3>Logout</h3>
            </Link>  
        </div>
           

       
    )
    
    
} 

export default Sidebar