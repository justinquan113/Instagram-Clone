import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Post from "./PostModal";
import React from "react";
import PostModal from "./PostModal";


function ProfilePost(props){
    
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    function toggleModal(){
        setIsModalOpen(prevState => !prevState)
    }
   
    return(
        <>
        {isModalOpen && <PostModal />}
        <div className="post-container" onClick={toggleModal}>
              <div className="overlay">
                 <div className="likes-comments">
                     <div className="post-likes">
                         <AiFillHeart style={{backgroundColor: "transparent"}}/>
                         <p className="number-likes-comments">123</p>
                     </div>
                     <div className="post-comments">
                           <FaComment  style={{backgroundColor: "transparent"}}/>
                        <p className="number-likes-comments">54</p>
                    </div>
                 </div>
                    
             </div>
             <img className="post-images"src={props.image}></img>
         </div>
         
        </>
    )
}

export default ProfilePost