import SuggestedHeader from "./SuggestedHeader"
import SuggestUser from "./SuggestedUser"

function SuggestedUsers(props){
    return(
        <div className="suggested-users">
            <SuggestedHeader 
                username = "Justin"
                avatar = "./images/jinwoo.png"
            />
            <div className="suggested-for-u">
                <p style={{color: "gray"}}>Suggested for you</p>
                <p style={{fontWeight: "bold", cursor: "pointer"}}>See All</p>
            </div>
            <SuggestUser 
                username = "gojo" 
                avatar = "./images/gojo.png"
                followers = {1000}
            />
            <SuggestUser 
                username = "sukuna" 
                avatar = "./images/sukuna.png"
                followers = {500}
            />
            <SuggestUser 
                username = "luffy" 
                avatar = "./images/luffy.png"
                followers = {200}
            />
        </div>
    )
}

export default SuggestedUsers