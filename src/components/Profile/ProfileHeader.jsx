function ProfileHeader(props){
    return(
        
        <div className="profile-header-image">
            <img className="profile-avatar" src= {props.avatar}></img>
            <div className="profile-header">
                
                <div className="profile-username">
                    <p>justin.quan17</p>
                    <button>Edit Profile</button>
                </div>
                <div className="profile-stats">
                    <p><span>1</span> Posts</p>
                    <p><span>500</span> Followers</p>
                    <p><span>435</span> Following</p>
                </div>
                <div className="profile-about">
                    <p style={{fontWeight: "bold"}}>Justin Quan</p>
                    <p>This is the about section</p>
                </div>
            </div>
                
        </div>
                        
    
    )
}

export default ProfileHeader