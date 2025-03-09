import FeedPosts from "../components/FeedPosts/FeedPosts"
import SuggestedUsers from "../components/SuggestedUsers/SuggestUsers"

function HomePage(){
    return(
        <div className="homepage-container">
            <div className="homepage-feed">            
                <FeedPosts />
            </div>
            <div className="homepage-suggested">
                <SuggestedUsers />
            </div>
           
        </div>
        
    )
}

export default HomePage