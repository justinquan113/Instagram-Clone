import ProfilePost from "./ProfilePost"
import PostModal from "./PostModal";
function ProfilePosts(){
  
    return(
        <>
            <div className="profile-posts">
                <ProfilePost image = "./images/sukuna.png"/>
                <ProfilePost image = "./images/gojo.png" />
                <ProfilePost image = "./images/img1.png"/>
                <ProfilePost image = "./images/shoto.png"/>
                <ProfilePost image = "./images/gear5.png"/>
            </div>
            
        </>
    )
}


export default ProfilePosts