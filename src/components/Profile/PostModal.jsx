import { AiOutlineClose } from "react-icons/ai";
import { FaTrash } from "react-icons/fa6";

import React from 'react'
import ReactDOM from 'react-dom'
function PostModal(props){

    
    return ReactDOM.createPortal(
        <div className="modal-container">
         
            <img className='modal-image' src= {props.image}></img>
            <div className='modal-right-side'>
                <div className='modal-header'>
                    <div className="header-avatar-username">
                        <img className="avatar" src= {props.image}></img>
                        <p>Username</p>
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
                <div>
                    <div className="comment">
                        <img className="avatar" src="./images/sukuna.png"></img>
                        <div className="user-day">
                            <p>username</p>
                            <p>day</p>
                        </div>
                        <p>comment</p>
                    </div>
                   
                   
                </div>
                <div>
                    Footer
                </div>
            </div>
           
                
        
        </div>
        ,document.getElementById("portal")
    )
}

export default PostModal