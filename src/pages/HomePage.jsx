import FeedPosts from "../components/FeedPosts/FeedPosts"


function HomePage(){
    return(
        <div className="homepage-container">
            <div className="homepage-feed">
                
                <FeedPosts />
            </div>
            <div className="homepage-suggested">
                Suggested User
            </div>
           
        </div>
        
    )
}

export default HomePage