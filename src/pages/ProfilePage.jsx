import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTabs from "../components/Profile/ProfileTabs"
import ProfilePosts from "../components/Profile/ProfilePosts"
import PostModal from "../components/Profile/PostModal"
import { useLocation, useParams } from "react-router-dom"
import useGetUserProfileByUsername from "../hooks/useGetUserProfileByUsername"

function ProfilePage(){

    const {username} = useParams() //fetching user from url
    const {isloading, userProfile} = useGetUserProfileByUsername(username) //passing the username from url to hook

    return(
       <div className="profile">   
            <div>
                {userProfile && <ProfileHeader avatar = "./images/jinwoo.png"/>}
            </div>
            <div className="profile-posts-section">
                <ProfileTabs />
                <ProfilePosts />
            </div>  
       </div>
       
    )
}

export default ProfilePage