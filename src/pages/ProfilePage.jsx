import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTabs from "../components/Profile/ProfileTabs"
import ProfilePosts from "../components/Profile/ProfilePosts"
import PostModal from "../components/Profile/PostModal"

function ProfilePage(){

    
    return(
       <div className="profile">   
            <div>
                <ProfileHeader avatar = "./images/jinwoo.png"/>
            </div>
            <div className="profile-posts-section">
                <ProfileTabs />
                <ProfilePosts />
            </div>  
       </div>
       
    )
}

export default ProfilePage