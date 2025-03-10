import { BsGrid3X3 } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
function ProfileTabs(){
    return(
        <div className="profile-tabs">
            <div className="tabs-posts">
                <BsGrid3X3 className="tabs-icon"/>
                <h3>POSTS</h3>
            </div>
            <div className="tabs-saved">
                <BsBookmark className="tabs-icon"/>
                <h3>SAVED</h3>
            </div>
            <div className="tabs-likes">
                <BsHeart className="tabs-icon"/>
                <h3>LIKES</h3>
            </div>
        </div>
    )

}

export default ProfileTabs