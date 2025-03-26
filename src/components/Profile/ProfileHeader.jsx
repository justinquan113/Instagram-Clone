import React from "react"
import useAuthStore from "../../store/authStore"
import useUseProfileStore from "../../store/userProfileStore"
import EditModal from "./EditModal"

function ProfileHeader(props){
    const {userProfile} = useUseProfileStore()
    const authUser = useAuthStore(state => state.user)
    const [isModal, setisModal] = React.useState(false)

    function toggleModal(){
        setisModal(prevState => !prevState)
    }
    const visitingOwnProfile = authUser && userProfile.username == authUser.username
    return(
        
        <div className="profile-header-image">
            {isModal && <EditModal toggleModal = {toggleModal}/>}
            <img className="profile-avatar" src= {userProfile.profilePicURL}></img>
            <div className="profile-header">
                
                <div className="profile-username">
                    <p>{userProfile.username}</p>
                    {visitingOwnProfile ? 
                        <button className="profile-btn" onClick={toggleModal}>Edit Profile</button>:
                        <button className="profile-btn" style={{backgroundColor: "blue", color: "white"}}>Follow</button>}
                   
                </div>
                <div className="profile-stats">
                    <p><span>{userProfile.posts.length}</span> Posts</p>
                    <p><span>{userProfile.followers.length}</span> Followers</p>
                    <p><span>{userProfile.following.length}</span> Following</p>
                </div>
                <div className="profile-about">
                    <p style={{fontWeight: "bold"}}>{userProfile.fullName}</p>
                    <p>{userProfile.bio}</p>
                </div>
            </div>
                
        </div>
                        
    
    )
}

export default ProfileHeader