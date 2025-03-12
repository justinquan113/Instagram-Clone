import { AiOutlineClose } from "react-icons/ai";
import { FaTrash } from "react-icons/fa6";
import PostFooter from "../FeedPosts/PostFooter"
import React from 'react'
import ReactDOM from 'react-dom'
import Comment from "../Comment/Comment";
function PostModal(props){

    
    return ReactDOM.createPortal(
        <div className="modal-container">
         
            <img className='modal-image' src= {props.image}></img>
            <div className='modal-right-side'>
                <div className='modal-header'>
                    <div className="header-avatar-username">
                        <img className="modal-avatar" src= {props.image}></img>
                        <p >Username</p>
                        <div className="trash">
                            <FaTrash style={{cursor: "pointer"}}/>
                        </div>
                    </div>
                    
                    <button 
                        className="modal-close-btn"
                        onClick={() => props.toggleModal(false)}
                    >
                        <AiOutlineClose className="x-btn"/>
                    </button>
                </div>
                
                <div className="comments-container">
                    
                        <Comment 
                            avatar = {props.image}
                            comment = {"nice pic"}
                            username = {"Justin"}
                            createdAt = {"12h ago"}
                        
                        />
                        <Comment 
                            avatar = {props.image}
                            comment = {"nice pic"}
                            username = {"Justin"}
                            createdAt = {"12h ago"}
                        
                        />
                        <Comment  
                            avatar = {props.image}
                            comment = {"nice pic"}
                            username = {"Justin"}
                            createdAt = {"12h ago"}
                        />
                         <Comment  
                            avatar = {props.image}
                            comment = {"nice pic"}
                            username = {"Justin"}
                            createdAt = {"12h ago"}
                        />
                         <Comment  
                            avatar = {props.image}
                            comment = {"nice pic"}
                            username = {"Justin"}
                            createdAt = {"12h ago"}
                        />
                         <Comment  
                            avatar = {props.image}
                            comment = {"nice pic"}
                            username = {"Justin"}
                            createdAt = {"12h ago"}
                        />
                         <Comment  
                            avatar = {props.image}
                            comment = {"nice pic"}
                            username = {"Justin"}
                            createdAt = {"12h ago"}
                        />
                         <Comment  
                            avatar = {props.image}
                            comment = {"nice pic"}
                            username = {"Justin"}
                            createdAt = {"12h ago"}
                        />
                         <Comment  
                            avatar = {props.image}
                            comment = {"nice pic"}
                            username = {"Justin"}
                            createdAt = {"12h ago"}
                        />
                         <Comment  
                            avatar = {props.image}
                            comment = {"nice pic"}
                            username = {"Justin"}
                            createdAt = {"12h ago"}
                        />
                        
                    
                </div>
                   
               
                <div className="modal-footer">
                    <PostFooter isProfilePage ={true}/>
                </div>
            </div>
           
                
        
        </div>
        ,document.getElementById("portal")
    )
}

export default PostModal